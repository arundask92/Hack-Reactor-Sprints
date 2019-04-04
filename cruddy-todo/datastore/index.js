// import { basename } from 'path';

const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const counter = require('./counter');
var Promise = require('bluebird');
const readFilePromise = Promise.promisify(fs.readFile);

// var items = {};

// Public API - Fix these CRUD functions ///////////////////////////////////////

exports.create = (text, callback) => {
  counter.getNextUniqueId((err, id) => {
    if (err) {
      throw err;
    } else {
      fs.writeFile(path.join(exports.dataDir, id + '.txt'), text, err => {
        if (err) {
          throw err;
        }
        callback(null, { id: id, text: text });
      });
    }
  });
};

exports.readOne = (id, callback) => {
  //read data directory
  fs.readdir(exports.dataDir, (err, todos) => {
    // for each todo in dir
    _.each(todos, todo => {
      if (todo.slice(0, -4) === id) {
        // read file + err first
        fs.readFile(path.join(exports.dataDir, todo), 'UTF-8', (err, data) => {
          if (err) {
            throw err;
          } else {
            callback(null, { id: id, text: data });
          }
        });
      }
    });
    fs.access(path.join(exports.dataDir, `${id}.txt`), err => {
      if (err) {
        return callback(err);
      }
    });
  });
};

exports.readAll = callback => {
  fs.readdir(exports.dataDir, (err, files) => {
    if (err) {
      throw 'error reading data folder';
    }
    var data = _.map(files, file => {
      var id = file.slice(0, -4);
      var filepath = path.join(exports.dataDir, file);
      return readFilePromise(filepath).then(fileData => {
        return {
          id: id,
          text: fileData.toString()
        };
      });
    });
    Promise.all(data).then(
      items => callback(null, items),
      err => callback(err)
    );
  });
};

exports.update = (id, text, callback) => {
  // read directory
  fs.readdir(exports.dataDir, (err, todos) => {
    if (err) {
      throw err;
    } else {
      // for each file in dir
      _.each(todos, todo => {
        // if file doesn't exist
        if (todo.slice(0, -4) !== id) {
          callback(new Error(`No item with id: ${id}`));
        }
        // if file(minus '.txt') matches id
        if (todo.slice(0, -4) === id) {
          // write file with given id, text and callback
          fs.writeFile(path.join(exports.dataDir, id + '.txt'), text, err => {
            if (err) {
              throw err;
            } else {
              callback(null, { id: id, text: text });
            }
          });
        }
      });
    }
  });
};

exports.delete = (id, callback) => {
  // if file exists
  fs.access(path.join(exports.dataDir, `${id}.txt`), err => {
    if (err) {
      return callback(err);
    }
    fs.unlink(path.join(exports.dataDir, `${id}.txt`), err => {
      if (err) {
        return callback(err);
      }
      callback();
    });
  });
  // read directory, return array
  // splice the file from id index

  // var item = items[id];
  // delete items[id];
  // if (!item) {
  //   // report an error if item not found
  //   callback(new Error(`No item with id: ${id}`));
  // } else {
  //   callback();
  // }
};

// Config+Initialization code -- DO NOT MODIFY /////////////////////////////////
exports.dataDir = path.join(__dirname, 'data');

exports.initialize = () => {
  if (!fs.existsSync(exports.dataDir)) {
    fs.mkdirSync(exports.dataDir);
  }
};
