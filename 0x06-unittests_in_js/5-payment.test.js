const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;
  beforeEach(() => {
    if (!spy) {
      spy = sinon.spy(console);
    }
  });
  afterEach(() => {
    spy.log.resetHistory();
  });
  it('log 120 to console', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.log.calledWith('The total is: 120')).to.be.false;
    expect(spy.log.calledOnce).to.be.true;
  });
  it('logs "The total is: 20" to the console', function() {
    sendPaymentRequestToApi(10, 10);
    expect(spy.log.calledWith('The total is: 20')).to.be.false;
    expect(spy.log.calledOnce).to.be.true;
  });
});
