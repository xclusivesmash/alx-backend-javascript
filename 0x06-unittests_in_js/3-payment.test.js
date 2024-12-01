/* import the sinon library */
const sinon = require('sinon');
/* import utils from utils */
const Utils = require('./utils');
/* using expect from chai module */
const { expect } = require('chai');
/* import sendPaymentToApi from 3-payment */
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('sendPaymentRequestToApi utilization of calculateNumber', function() {
    const spy = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calculateNumber.callCount).to.be.equal(1);
    spy.calculateNumber.restore();
  });
});
