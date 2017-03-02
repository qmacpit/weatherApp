const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());

require('./api')(app);

app.listen(5000, () => {
  console.log('listening on port 5000');
});
