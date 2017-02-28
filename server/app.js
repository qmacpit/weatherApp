const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('../client'));
app.use(bodyParser.json());

require('./api')(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});