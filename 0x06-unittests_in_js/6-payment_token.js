const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
  if (success) {
    /* successful promise */
    resolve({data: 'Successful response from the API'});
  }
});

module.exports = getPaymentTokenFromAPI;
