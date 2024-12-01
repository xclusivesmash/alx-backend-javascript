/* import express */
const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

/* start app */
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

/* exports section */
module.exports = app;
