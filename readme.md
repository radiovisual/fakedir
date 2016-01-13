# fakedir 

> Create a super-shallow snapshot of your working directory with ~0-btye files

Useful if you want to share your directory file listing / structure and the file data is not important. 


## Install

```
$ npm install -g fakedir
```


## Usage

Run the `fakedir` command at the terminal you 

```
$ cd dir/to/snapshot/
$ fakedir
```

Now you have a copy of your directory with name-only (empty) files in it. **Amaze!** :open_mouth:

**Note:** `fakedir` directories follow this naming convention: `fakedir_<name of working directory>`. This removes the confusion about the empty-file (no-data) snapshot of your directory and the real thing.

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
