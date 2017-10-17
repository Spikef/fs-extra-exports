var fs = module.exports = {};

var _fs = require('fs-extra/lib/fs');
var _copy = require('fs-extra/lib/copy');
var _copySync = require('fs-extra/lib/copy-sync');
var _mkdirs = require('fs-extra/lib/mkdirs');
var _remove = require('fs-extra/lib/remove');
var _json = require('fs-extra/lib/json');
var _move = require('fs-extra/lib/move');
var _moveSync = require('fs-extra/lib/move-sync');
var _empty = require('fs-extra/lib/empty');
var _ensure = require('fs-extra/lib/ensure');
var _output = require('fs-extra/lib/output');
var _pathExists = require('fs-extra/lib/path-exists');

/**
 * @callback errorCallback
 * @param {*} error
 */

/**
 * Copy a file or directory. The directory can have contents. Like `cp -r`.
 * @param {string} src - The source file/direction
 * @param {string} desc - The target file/direction
 * @param {Object} [options] - Other options.
 * @param {boolean} [options.overwrite=true] - overwrite existing file or directory, default is `true`. _Note that the copy operation will silently fail if you set this to `false` and the destination exists._ Use the `errorOnExist` option to change this behavior.
 * @param {boolean} [options.errorOnExist=false] - when `overwrite` is `false` and the destination exists, throw an error. Default is `false`.
 * @param {boolean} [options.dereference=false] - dereference symlinks, default is `false`.
 * @param {boolean} [options.preserveTimestamps=false] - will set last modification and access times to the ones of the original source files, default is `false`.
 * @param {function} [options.filter=undefined] - Function to filter copied files. Return `true` to include, `false` to exclude.
 * @param {errorCallback} [callback] - Function to handle the error
 */
fs.copy = function(src, desc, options, callback) {
    var args = [].slice.call(arguments);
    return _copy.copy.apply(this, args);
};

/**
 * Copy a file or directory. The directory can have contents. Like `cp -r`.
 * @param {string} src - The source file/direction
 * @param {string} desc - The target file/direction
 * @param {Object} [options] - Other options.
 * @param {boolean} [options.overwrite=true] - overwrite existing file or directory, default is `true`. _Note that the copy operation will silently fail if you set this to `false` and the destination exists._ Use the `errorOnExist` option to change this behavior.
 * @param {boolean} [options.errorOnExist=false] - when `overwrite` is `false` and the destination exists, throw an error. Default is `false`.
 * @param {boolean} [options.dereference=false] - dereference symlinks, default is `false`.
 * @param {boolean} [options.preserveTimestamps=false] - will set last modification and access times to the ones of the original source files, default is `false`.
 * @param {function} [options.filter=undefined] - Function to filter copied files. Return `true` to include, `false` to exclude.
 */
fs.copySync = function(src, desc, options) {
    var args = [].slice.call(arguments);
    return _copySync.copySync.apply(this, args);
};

/**
 * Ensures that a directory is empty. Deletes directory contents if the directory is not empty. If the directory does not exist, it is created. The directory itself is not deleted.
 * @param {string} dir - The source direction
 * @param {errorCallback} [callback] - Function to handle the error
 */
fs.emptydir = fs.emptyDir = function(dir, callback) {
    var args = [].slice.call(arguments);
    return _empty.emptyDir.apply(this, args);
};

/**
 * Ensures that a directory is empty. Deletes directory contents if the directory is not empty. If the directory does not exist, it is created. The directory itself is not deleted.
 * @param {string} dir - The source direction
 */
fs.emptydirSync = fs.emptyDirSync = function(dir) {
    var args = [].slice.call(arguments);
    return _empty.emptyDirSync.apply(this, args);
};

/**
 * Ensures that the directory exists. If the directory structure does not exist, it is created. Like `mkdir -p`.
 * @param {string} dir
 * @param {errorCallback} [callback] - Function to handle the error
 */
fs.mkdirs = fs.mkdirp = fs.ensureDir = function(dir, callback) {
    var args = [].slice.call(arguments);
    return _mkdirs.mkdirs.apply(this, args);
};

/**
 * Ensures that the directory exists. If the directory structure does not exist, it is created. Like `mkdir -p`.
 * @param {string} dir
 */
fs.mkdirsSync = fs.mkdirpSync = fs.ensureDirSync = function(dir, callback) {
    var args = [].slice.call(arguments);
    return _mkdirs.mkdirsSync.apply(this, args);
};

/**
 * Ensures that the file exists. If the file that is requested to be created is in directories that do not exist, these directories are created. If the file already exists, it is **NOT MODIFIED**.
 * @param {string} file
 * @param {errorCallback} [callback] - Function to handle the error
 */
fs.createFile = fs.ensureFile = function(file, callback) {
    var args = [].slice.call(arguments);
    return _ensure.createFile.apply(this, args);
};

/**
 * Ensures that the file exists. If the file that is requested to be created is in directories that do not exist, these directories are created. If the file already exists, it is **NOT MODIFIED**.
 * @param {string} file
 */
fs.createFileSync = fs.ensureFileSync = function() {
    var args = [].slice.call(arguments);
    return _ensure.createFileSync.apply(this, args);
};

/**
 * Ensures that the link exists. If the directory structure does not exist, it is created.
 * @param {string} srcpath
 * @param {string} dstpath
 * @param {errorCallback} [callback] - Function to handle the error
 */
fs.createLink = fs.ensureLink = function(srcpath, dstpath, callback) {
    var args = [].slice.call(arguments);
    return _ensure.createLink.apply(this, args);
};

/**
 * Ensures that the link exists. If the directory structure does not exist, it is created.
 * @param {string} srcpath
 * @param {string} dstpath
 */
fs.createLinkSync = fs.ensureLinkSync = function(srcpath, dstpath) {
    var args = [].slice.call(arguments);
    return _ensure.createLinkSync.apply(this, args);
};

/**
 * Ensures that the symlink exists. If the directory structure does not exist, it is created.
 * @param {string} srcpath
 * @param {string} dstpath
 * @param {string} type
 * @param {errorCallback} [callback] - Function to handle the error
 */
fs.createSymlink = fs.ensureSymlink = function(srcpath, dstpath, type, callback) {
    var args = [].slice.call(arguments);
    return _ensure.createSymlink.apply(this, args);
};

/**
 * Ensures that the symlink exists. If the directory structure does not exist, it is created.
 * @param {string} srcpath
 * @param {string} dstpath
 * @param {string} type
 */
fs.createSymlinkSync = fs.ensureSymlinkSync = function(srcpath, dstpath, type) {
    var args = [].slice.call(arguments);
    return _ensure.createSymlinkSync.apply(this, args);
};

/**
 * Moves a file or directory, even across devices.
 * @param {string} src
 * @param {string} dest
 * @param {Object} [options]
 * @param {boolean} [options.overwrite] - overwrite existing file or directory, default is `false`.
 * @param {errorCallback} [callback] - Function to handle the error
 */
fs.move = function(src, dest, options, callback) {
    var args = [].slice.call(arguments);
    return _move.move.apply(this, args);
};

/**
 * Moves a file or directory, even across devices.
 * @param {string} src
 * @param {string} dest
 * @param {Object} [options]
 * @param {boolean} [options.overwrite] - overwrite existing file or directory, default is `false`.
 */
fs.moveSync = function(src, dest, options) {
    var args = [].slice.call(arguments);
    return _moveSync.moveSync.apply(this, args);
};

/**
 * Almost the same as `writeFile` (i.e. it [overwrites](http://pages.citebite.com/v2o5n8l2f5reb)), except that if the parent directory does not exist, it's created. `file` must be a file path (a buffer or a file descriptor is not allowed). `options` are what you'd pass to [`fs.writeFile()`](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback).
 * @param {string} file
 * @param {string} data
 * @param {string|Object} [options]
 * @param {errorCallback} [callback] - Function to handle the error
 */
fs.outputFile = function(file, data, options, callback) {
    var args = [].slice.call(arguments);
    return _output.outputFile.apply(this, args);
};

/**
 * Almost the same as `writeFileSync` (i.e. it [overwrites](http://pages.citebite.com/v2o5n8l2f5reb)), except that if the parent directory does not exist, it's created. `file` must be a file path (a buffer or a file descriptor is not allowed). `options` are what you'd pass to [`fs.writeFileSync()`](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options).
 * @param {string} file
 * @param {string} data
 * @param {string|Object} [options]
 */
fs.outputFileSync = function(file, data, options) {
    var args = [].slice.call(arguments);
    return _output.outputFileSync.apply(this, args);
};

/**
 * Writes an object to a JSON file.
 * @param {string} file
 * @param {string} object
 * @param {string|Object} [options]
 * @param {Number|String} [options.spaces] - Number of spaces to indent; or a string to use for indentation (i.e. pass `'\t'` for tab indentation). See [the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_space_argument) for more info.
 * @param {function} [options.replacer] - [JSON replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter)
 * @param {errorCallback} [callback] - Function to handle the error
 */
fs.writeJson = fs.writeJSON = function(file, object, options, callback) {
    var args = [].slice.call(arguments);
    return _json.writeJson.apply(this, args);
};

/**
 * Writes an object to a JSON file.
 * @param {string} file
 * @param {string} object
 * @param {string|Object} [options]
 * @param {Number|String} [options.spaces] - Number of spaces to indent; or a string to use for indentation (i.e. pass `'\t'` for tab indentation). See [the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_space_argument) for more info.
 * @param {function} [options.replacer] - [JSON replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter)
 */
fs.writeJsonSync = fs.writeJSONSync = function() {
    var args = [].slice.call(arguments);
    return _json.writeJsonSync.apply(this, args);
};

/**
 * Almost the same as writeJson, except that if the directory does not exist, it's created.
 * @param {string} file
 * @param {string} object
 * @param {string|Object} [options]
 * @param {Number|String} [options.spaces] - Number of spaces to indent; or a string to use for indentation (i.e. pass `'\t'` for tab indentation). See [the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_space_argument) for more info.
 * @param {function} [options.replacer] - [JSON replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter)
 * @param {errorCallback} [callback] - Function to handle the error
 */
fs.outputJson = fs.outputJSON = function(file, object, options, callback) {
    var args = [].slice.call(arguments);
    return _json.outputJson.apply(this, args);
};

/**
 * Almost the same as writeJsonSync, except that if the directory does not exist, it's created.
 * @param {string} file
 * @param {string} object
 * @param {string|Object} [options]
 * @param {Number|String} [options.spaces] - Number of spaces to indent; or a string to use for indentation (i.e. pass `'\t'` for tab indentation). See [the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_space_argument) for more info.
 * @param {function} [options.replacer] - [JSON replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter)
 */
fs.outputJsonSync = fs.outputJSONSync = function(file, object, options) {
    var args = [].slice.call(arguments);
    return _json.outputJsonSync.apply(this, args);
};

/**
 * Reads a JSON file and then parses it into an object. `options` are the same that you'd pass to [`jsonFile.readFile`](https://github.com/jprichardson/node-jsonfile#readfilefilename-options-callback).
 * @param {string} file
 * @param {Object} [options]
 * @param {errorCallback} [callback] - Function to handle the error
 */
fs.readJson = fs.readJSON = function(file, options, callback) {
    var args = [].slice.call(arguments);
    return _json.readJson.apply(this, args);
};

/**
 * Reads a JSON file and then parses it into an object. `options` are the same that you'd pass to [`jsonFile.readFile`](https://github.com/jprichardson/node-jsonfile#readfilefilename-options-callback).
 * @param {string} file
 * @param {Object} [options]
 */
fs.readJsonSync = fs.readJSONSync = function(file, options) {
    var args = [].slice.call(arguments);
    return _json.readJsonSync.apply(this, args);
};

/**
 * Test whether or not the given path exists by checking with the file system. Like [`fs.exists`](https://nodejs.org/api/fs.html#fs_fs_exists_path_callback), but with a normal callback signature (err, exists). Uses `fs.access` under the hood.
 * @param file
 * @param {errorCallback} [callback] - Function to handle the error
 */
fs.pathExists = function(file, callback) {
    var args = [].slice.call(arguments);
    return _pathExists.pathExists.apply(this, args);
};

/**
 * Test whether or not the given path exists by checking with the file system. Like [`fs.exists`](https://nodejs.org/api/fs.html#fs_fs_exists_path_callback), but with a normal callback signature (err, exists). Uses `fs.access` under the hood.
 * @param file
 */
fs.pathExistsSync = function(file) {
    var args = [].slice.call(arguments);
    return _pathExists.pathExistsSync.apply(this, args);
};

/**
 * Removes a file or directory. The directory can have contents. Like `rm -rf`.
 * @param path
 * @param {errorCallback} [callback] - Function to handle the error
 */
fs.remove = function(path, callback) {
    var args = [].slice.call(arguments);
    return _remove.remove.apply(this, args);
};

/**
 * Removes a file or directory. The directory can have contents. Like `rm -rf`.
 * @param path
 */
fs.removeSync = function(path) {
    var args = [].slice.call(arguments);
    return _remove.removeSync.apply(this, args);
};

fs.Stats = _fs.Stats;
fs.access = _fs.access;
fs.accessSync = _fs.accessSync;
fs.exists = _fs.exists;
fs.existsSync = _fs.existsSync;
fs.readFile = _fs.readFile;
fs.readFileSync = _fs.readFileSync;
fs.close = _fs.close;
fs.closeSync = _fs.closeSync;
fs.open = _fs.open;
fs.openSync = _fs.openSync;
fs.read = _fs.read;
fs.readSync = _fs.readSync;
fs.write = _fs.write;
fs.writeSync = _fs.writeSync;
fs.rename = _fs.rename;
fs.renameSync = _fs.renameSync;
fs.truncate = _fs.truncate;
fs.truncateSync = _fs.truncateSync;
fs.ftruncate = _fs.ftruncate;
fs.ftruncateSync = _fs.ftruncateSync;
fs.rmdir = _fs.rmdir;
fs.rmdirSync = _fs.rmdirSync;
fs.fdatasync = _fs.fdatasync;
fs.fdatasyncSync = _fs.fdatasyncSync;
fs.fsync = _fs.fsync;
fs.fsyncSync = _fs.fsyncSync;
fs.mkdir = _fs.mkdir;
fs.mkdirSync = _fs.mkdirSync;
fs.readdir = _fs.readdir;
fs.readdirSync = _fs.readdirSync;
fs.fstat = _fs.fstat;
fs.lstat = _fs.lstat;
fs.stat = _fs.stat;
fs.fstatSync = _fs.fstatSync;
fs.lstatSync = _fs.lstatSync;
fs.statSync = _fs.statSync;
fs.readlink = _fs.readlink;
fs.readlinkSync = _fs.readlinkSync;
fs.symlink = _fs.symlink;
fs.symlinkSync = _fs.symlinkSync;
fs.link = _fs.link;
fs.linkSync = _fs.linkSync;
fs.unlink = _fs.unlink;
fs.unlinkSync = _fs.unlinkSync;
fs.fchmod = _fs.fchmod;
fs.fchmodSync = _fs.fchmodSync;
fs.lchmod = _fs.lchmod;
fs.lchmodSync = _fs.lchmodSync;
fs.chmod = _fs.chmod;
fs.chmodSync = _fs.chmodSync;
fs.lchown = _fs.lchown;
fs.lchownSync = _fs.lchownSync;
fs.fchown = _fs.fchown;
fs.fchownSync = _fs.fchownSync;
fs.chown = _fs.chown;
fs.chownSync = _fs.chownSync;
fs._toUnixTimestamp = _fs._toUnixTimestamp;
fs.utimes = _fs.utimes;
fs.utimesSync = _fs.utimesSync;
fs.futimes = _fs.futimes;
fs.futimesSync = _fs.futimesSync;
fs.writeFile = _fs.writeFile;
fs.writeFileSync = _fs.writeFileSync;
fs.appendFile = _fs.appendFile;
fs.appendFileSync = _fs.appendFileSync;
fs.watch = _fs.watch;
fs.watchFile = _fs.watchFile;
fs.unwatchFile = _fs.unwatchFile;
fs.realpathSync = _fs.realpathSync;
fs.realpath = _fs.realpath;
fs.mkdtemp = _fs.mkdtemp;
fs.mkdtempSync = _fs.mkdtempSync;
fs.copyFile = _fs.copyFile;
fs.copyFileSync = _fs.copyFileSync;
fs.createReadStream = _fs.createReadStream;
fs.ReadStream = _fs.ReadStream;
fs.FileReadStream = _fs.FileReadStream;
fs.createWriteStream = _fs.createWriteStream;
fs.WriteStream = _fs.WriteStream;
fs.FileWriteStream = _fs.FileWriteStream;
fs.lutimes = _fs.lutimes;
fs.lutimesSync = _fs.lutimesSync;
fs.gracefulify = _fs.gracefulify;

fs.constants = _fs.constants;
fs.F_OK = _fs.F_OK;
fs.R_OK = _fs.R_OK;
fs.W_OK = _fs.W_OK;
fs.X_OK = _fs.X_OK;