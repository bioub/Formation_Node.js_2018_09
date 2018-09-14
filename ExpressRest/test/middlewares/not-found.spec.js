const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;

chai.use(sinonChai);

const notFound = require('../../src/middlewares/not-found');

describe('notFound', () => {

  it('should call res.json with Not Found without notFoundReason', () => {
    const req = {};
    const res = {
      json: sinon.spy(),
    };
    notFound(req, res);
    expect(res.statusCode).to.equals(404);
    expect(res.json).to.have.been.calledOnceWith({msg: 'Not Found'});
  });

  it('should call res.json with with notFoundReason when specified', () => {

  });

});
