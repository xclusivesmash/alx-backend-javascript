/* use request module */
const request = require('request');
/* import exepct from chai module */
const { expect } = require('chai');

describe('API integration test', function() {
  const URL = 'http://localhost:7865';

  /* first check */
  it('check the response of "GET /"', (done) => {
    request.get(`${URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  /* second check */
  it('checks "GET /cart/:id"', function(done) {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  /* third check */
  it('checks "GET /cart/:id"', function(done) {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  /* fourth check */
  it('checks "GET /cart/:id"', function(done) {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
