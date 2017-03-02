const { fetchData } = require('./yahooApi');

module.exports = (app) => {

  app.get(
    '/api/weather/:locations',
    (req, res) => {
      fetchData(req.params.locations)
        .then(data => res.send(data).end());
    }
  );

};
