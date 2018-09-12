const fs = require('fs-extra');

const path = require('path');
const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(file, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  return fs.appendFile(file, line);
}

/*
async function ensureDir(logDir) {
  try {
    const stats = await fs.stat(logDir);
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      await fs.mkdir(logDir);
    } else {
      throw err;
    }
  }
}
*/

(async () => {
  try {
    try {
      const stats = await fs.stat(logDir);
    }
    catch (err) {
      if (err.code === 'ENOENT') {
        await fs.mkdir(logDir);
      } else {
        throw err;
      }
    }

    await log(logFile, 'Ligne 1');
    await log(logFile, 'Ligne 2');
    await log(logFile, 'Ligne 3');
    console.log('DONE');
  }
  catch (err) {
    console.log(err);
  }
})();
