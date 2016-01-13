#! /usr/bin/env node
'use strict';
var multiline = require('multiline');
var pkg = require('./package.json');
var getStdin = require('get-stdin');
var mkdirp = require('mkdirp');
var path = require('path');
var fs = require('fs');

var options = require('minimist')(process.argv.slice(2));
var args = options._;
delete options._;

var dirname = 'fakedir_' + process.cwd().split(/\/|\\/).pop();
var fullpath = process.cwd();
var destination = path.join(fullpath, dirname);

function init(args, options) {
	if (args.length > 0) {
		console.log('unknown args: ', args);
	}

	var files = fs.readdirSync(fullpath);

	if (options.version || options.v){
		console.log(pkg.version);
		process.exit();
	}

	if (options.help || options.h){
		showHelp();
		process.exit();
	}

	mkdirp(destination, function (err) {
		if (err) {
			throw err;
		}

		files.map(function (file) {
			file = path.join(dirname, file);
			console.log('writing: ', file);
			fs.writeFileSync(file, 'fakedirfile');
		});
	});
}

/**
 * Pretty-print fakedir help information
 *
 */
function showHelp(){
	console.log(multiline(function () {
/*

Create a super-shallow archive snapshot of your working directory with ~0-btye files.

Commands
  fakedir			create a fake dir archive or directory

Options
  -h, --help		Show this help message
  -v, --version		Show the current fakedir version

*/
	}));
}

if (process.stdin.isTTY) {
	init(args, options);
} else {
	getStdin(function (data) {
		[].push.apply(args, data.trim().split(/\r?\n/));
		init(args, options);
	});
}