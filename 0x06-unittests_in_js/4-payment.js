const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const summation = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is : ${summation}`);
};

module.exports = sendPaymentRequestToApi;
