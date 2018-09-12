'use strict';

const assert = require('assert');
const chalk = require('chalk');
const myMaths = require('./my-maths');

try {
  assert.strictEqual(myMaths.sum(1, 2), 3);
  console.log(chalk.green('Success my-maths'));
}
catch (err) {
  console.log(chalk.red('Error my-maths'));
  process.exit(1);
}
