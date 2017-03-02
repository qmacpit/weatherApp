const YQL = require('yql');

const QUERY_SEPARATOR = ';';

const { buildSingleQuery, buildMultipleQuery } = require('./queryBuilder');

const performRequest = query => new Promise((resolve, reject) => {
  const yqlQuery = new YQL(query);
  yqlQuery.exec((err, data) => {
    if (err) {
      return reject(err);
    }
    return resolve(data);
  });
});

/**
 * Fetch data for single location
 * @param  {String} textQuery - sql query
 * @return {Promise} data request promise
 */
const fetchSingle = textQuery => performRequest(buildSingleQuery(textQuery));

/**
 * Fetch data for multiple locations
 * @param  {String} textQuery - sql query
 * @return {Promise} data request promise
 */
const fetchMultiple = textQueries =>
  performRequest(buildMultipleQuery(textQueries.split(QUERY_SEPARATOR)));

/**
 * Check if it is a signle location query text
 * @param  {String} text - location query text
 * @return {Boolean} true if it is a single location query text
 */
const isSingleQuery = text => text.indexOf(QUERY_SEPARATOR) === -1;

/**
 * Fetch weather data for given locations
 * @param  {String} location query text
 * semicolon separated string list of locations
 * example:
 * "99762;10001", "99762", "Nome AK", "Nome AK; New York"
 * @return {Promise} data request promise
 */
const fetchData = text => (isSingleQuery(text) ? fetchSingle(text) : fetchMultiple(text));

module.exports = {
  fetchData,
};
