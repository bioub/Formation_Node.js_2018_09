const fs = require('fs');
const async = require('async');

const path = require('path');
const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(file, msg, cb) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFile(file, line, cb);
}

async.tryEach([
  (next) => fs.stat(logDir, next),
  (next) => fs.mkdir(logDir, next),
], (err) => {
  if (err) {
    return console.log(err);
  }
  next();
})

function next() {

  async.series([
    (next) => log(logFile, 'Ligne 1', next),
    (next) => log(logFile, 'Ligne 2', next),
    (next) => log(logFile, 'Ligne 3', next),
  ], (err) => {
    if (err) {
      return console.log(err);
    }

    console.log('DONE');
  });

}
