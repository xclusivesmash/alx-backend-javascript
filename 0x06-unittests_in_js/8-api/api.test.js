/* use request module */
const request = require('request');
/* import exepct from chai module */
const { expect } = require('chai');

describe('API integration test', function() {
  const URL = 'http://localhost:7865';

  it('check the response of "GET /"', (done) => {
    request.get(`${URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
