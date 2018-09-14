const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(sinonChai);
chai.use(chaiHttp);

const app = require('../src/app');
const Model = require('../src/api/contact/model');

describe('Functionnal Tests', () => {

  describe('GET /api/contacts', () => {

    it('should return status code 200 and have correct body', async () => {
      const mockModel = sinon.mock(Model);

      mockModel.expects('find')
            .resolves([{firstName: 'A'}]);

      const res = await chai.request(app)
                            .get('/api/contacts');

      expect(res).to.have.status(200);
      expect(res.body).to.deep.equals([{firstName: 'A'}]);
      mockModel.verify();
    });

  });


});
