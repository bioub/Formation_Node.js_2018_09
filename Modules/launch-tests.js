const fs = require('fs');

fs.readdirSync('./theorie')
  .filter((filename) => filename.endsWith('.test.js'))
  .forEach((filename) => require(`./theorie/${filename}`));
