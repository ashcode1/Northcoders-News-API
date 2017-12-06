/* eslint-disable no-console */
const app = require('./server');
const { PORT } = process.env;

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});