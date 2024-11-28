/* import module: express */
const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

/* initialize server */
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

/* export section */
module.exports = app;
