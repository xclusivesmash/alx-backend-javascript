/* import the sinon library */
const sinon = require('sinon');
/* import utils from utils */
const Utils = require('./utils');
/* using expect from chai module */
const { expect } = require('chai');
/* import sendPaymentToApi from 3-payment */
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  it('sendPaymentRequestToApi utilization of calculateNumber', function() {
    const spy = sinon.spy(console);
    const stub = sinon.stub(Utils, "calculateNumber");

    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith("SUM"), 100, 20).to.be.true;
    expect(stub.callCount).to.be.equal(1);
    expect(spy.log.calledWith('The total is: 10')).to.be.true;
    expect(spy.log.callCount).to.be.equal(1);
    stub.restore();
    spy.log.restore();
  });
});
