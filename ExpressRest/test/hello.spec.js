const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

should();

const hello = (name) => `Hello ${name} !`;

describe('hello', () => {

  it('should return Hello Romain ! with param Romain', () => {
    assert.strictEqual(hello('Romain'), 'Hello Romain !');
    expect(hello('Romain')).to.be.equals('Hello Romain !');
    hello('Romain').should.be.equals('Hello Romain !');
  });

});
