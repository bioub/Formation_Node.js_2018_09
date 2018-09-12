'use strict';

const assert = require('assert');
const chalk = require('chalk');
const hello = require('./hello');

try {
  assert.strictEqual(hello('Romain'), 'Hello Romain !');
  console.log(chalk.green('Success hello'));
}
catch (err) {
  console.log(chalk.red('Error hello'));
  process.exit(1);
}
