# fakedir 

> Create a super-shallow snapshot of your working directory with ~0-byte files

Useful if you want to share your directory file listing or structure **and the file data is not important**. 


## Install

```
$ npm install -g fakedir
```


## Usage

Run the `fakedir` command at the terminal *within the directory you want to snapshot* 

```
$ cd dir/to/snapshot/
$ fakedir
```

Now you have a copy of your directory with name-only (empty) files in it. **Amaze!** :open_mouth:

**Note:** `fakedir` parent directories are prepended with `fakedir_`. This removes the confusion about the empty-file (no-data) copy of your directory and the real thing.

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
