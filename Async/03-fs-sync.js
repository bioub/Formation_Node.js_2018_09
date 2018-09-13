const fs = require('fs');

const path = require('path');
const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(file, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFileSync(file, line);
}

/*
function createDirIfNotExists(logDir) {
  try {
    const stats = fs.statSync(logDir);
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync(logDir);
    } else {
      throw err;
    }
  }
}
*/


try {
  try {
    const stats = fs.statSync(logDir);
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync(logDir);
    } else {
      throw err;
    }
  }

  log(logFile, 'Ligne 1');
  log(logFile, 'Ligne 2');
  log(logFile, 'Ligne 3');
  console.log('DONE');
}
catch (err) {
  console.log(err);
}
