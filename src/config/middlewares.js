/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.json());
};