const QUERY_DATA_TAG = '{{DATA}}';
const QUERY_TEMPLATE = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where${QUERY_DATA_TAG})`;

/**
 * Build query from single text parameter
 * @param {String} string text param
 * "x" => text="x"
 */
const buildSingleQuery = text => QUERY_TEMPLATE.replace(QUERY_DATA_TAG, ` text="${text}"`)

/**
 * Build query from text array
 * @param {Array[String]} text array of string text params
 * ["x", "y"] => text in ("x","y"))
 */
const buildMultipleQuery = text =>
  QUERY_TEMPLATE.replace(QUERY_DATA_TAG, ` text in (${text.map((current) => `"${current}"`).join(',')})`)

module.exports = {
  buildSingleQuery, buildMultipleQuery
};