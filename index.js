#! /usr/bin/env node
'use strict';
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');

var dirname = process.cwd().split(/\/|\\/).pop();
var fullpath = process.cwd();
var destination = path.join(fullpath, dirname);

mkdirp(destination, function(err) {
	if (err) {
		throw err;
	}

	var files = fs.readdirSync(fullpath);

	files.map(function(file) {
		file = path.join(dirname, file);
		console.log('writing: ', file);
		fs.writeFileSync(file, 'fakedir file');
	});
});


