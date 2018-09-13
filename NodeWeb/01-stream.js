const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
process.stdout.write('Hello ')
process.stdout.write('à tous !')

fs.createReadStream('./.editorconfig')
  .pipe(gzip)
  .pipe(process.stdout);

// cat .editorconfig | gzip | echo
