const fs = require('fs-extra');

const path = require('path');
const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(file, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  return fs.appendFile(file, line);
}

/* voir fs-extra
function ensureDir(logDir) {
  return fs.stat(logDir)
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.mkdir(logDir);
    }
    throw err;
  })
}
*/

fs.stat(logDir)
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.mkdir(logDir);
    }
    throw err;
  })
  .then(() => log(logFile, 'Ligne 1'))
  .then(() => log(logFile, 'Ligne 2'))
  .then(() => log(logFile, 'Ligne 3'))
  .then(() => console.log('Done'))
  .catch((err) => {
    console.log(err);
  });
