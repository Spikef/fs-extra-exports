var assign = require('fs-extra/lib/util/assign');

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

assign(fs, _fs);

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