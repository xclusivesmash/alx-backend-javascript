/* using expect from chai module */
const { expect } = require('chai');
/* use created function in 6 */
const getPaymentTokenFromAPI = require('./6-payment_token');

/* testing promise return */
describe('getPaymentTokenFromAPI', function() {
  it('getPaymentTokenFromAPI(success)', function(done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({data: 'Successful response from the API'});
        done();
      });
  });
});
