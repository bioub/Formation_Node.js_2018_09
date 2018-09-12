'use strict';

const assert = require('assert');
const myMaths = require('./my-maths');

try {
  assert.strictEqual(myMaths.sum(1, 2), 2);
  console.log('Success');
}
catch (err) {
  console.log('Error');
  process.exit(1);
}
