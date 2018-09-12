'use strict';

const assert = require('assert');
const hello = require('./hello');

try {
  assert.strictEqual(hello('Romain'), 'Hello Romain !');
  console.log('Success');
}
catch (err) {
  console.log('Error');
  process.exit(1);
}
