const axios = require('axios');

const ACTIONS = {
  LOCATION_DATA_LOADING: 'location_data_loading',
  LOCATION_DATA_SUCCESS: 'location_data_success',
  LOCATION_DATA_ERROR: 'location_data_error'
};

/*eslint-disable*/
const data = {"query":{"count":1,"created":"2017-03-02T18:29:44Z","lang":"en-US","results":{"channel":{"units":{"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},"title":"Yahoo! Weather - Nome, AK, US","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-12799801/","description":"Yahoo! Weather for Nome, AK, US","language":"en-us","lastBuildDate":"Thu, 02 Mar 2017 06:29 PM UTC","ttl":"60","location":{"city":"Nome","country":"United States","region":" AK"},"wind":{"chill":"0","direction":"350","speed":"6"},"atmosphere":{"humidity":"72","pressure":"1031.83","rising":"0","visibility":"9.0"},"astronomy":{"sunrise":"9:6 am","sunset":"7:21 pm"},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},"item":{"title":"Conditions for Nome, AK, US at 06:23 PM UTC","lat":"65.417068","long":"-165.319626","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-12799801/","pubDate":"Thu, 02 Mar 2017 06:23 PM UTC","condition":{"code":"28","date":"Thu, 02 Mar 2017 06:23 PM UTC","temp":"-8","text":"Mostly Cloudy"},"forecast":[{"code":"30","date":"02 Mar 2017","day":"Thu","high":"-4","low":"-13","text":"Partly Cloudy"},{"code":"28","date":"03 Mar 2017","day":"Fri","high":"7","low":"-4","text":"Mostly Cloudy"},{"code":"30","date":"04 Mar 2017","day":"Sat","high":"6","low":"-8","text":"Partly Cloudy"},{"code":"34","date":"05 Mar 2017","day":"Sun","high":"-2","low":"-14","text":"Mostly Sunny"},{"code":"34","date":"06 Mar 2017","day":"Mon","high":"-3","low":"-14","text":"Mostly Sunny"},{"code":"30","date":"07 Mar 2017","day":"Tue","high":"2","low":"-8","text":"Partly Cloudy"},{"code":"28","date":"08 Mar 2017","day":"Wed","high":"15","low":"5","text":"Mostly Cloudy"},{"code":"28","date":"09 Mar 2017","day":"Thu","high":"19","low":"11","text":"Mostly Cloudy"},{"code":"28","date":"10 Mar 2017","day":"Fri","high":"23","low":"11","text":"Mostly Cloudy"},{"code":"30","date":"11 Mar 2017","day":"Sat","high":"19","low":"7","text":"Partly Cloudy"}],"description":"<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/28.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Mostly Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Thu - Partly Cloudy. High: -4Low: -13\n<BR /> Fri - Mostly Cloudy. High: 7Low: -4\n<BR /> Sat - Partly Cloudy. High: 6Low: -8\n<BR /> Sun - Mostly Sunny. High: -2Low: -14\n<BR /> Mon - Mostly Sunny. High: -3Low: -14\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-12799801/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)\n<BR />\n]]>","guid":{"isPermaLink":"false"}}}}}};
/*eslint-enble*/

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout))

const performFectchLocationData = location => {
  return axios(`/api/weather/${location}`)
    .then(response => response.data);
}

const fetchLocationData = location => (dispatch, getState) => {
  dispatch({
    type: ACTIONS.LOCATION_DATA_LOADING
  });
  return Promise.all([
    //just to make loading animation look better
    delay(500),
    performFectchLocationData(location)
  ])
  .then(results => {
    dispatch({
      type: ACTIONS.LOCATION_DATA_SUCCESS,
      payload: results[1]
    });
  })
  .catch(err => {
    dispatch({
      type: ACTIONS.LOCATION_DATA_ERROR
    });
  });
}

export {
  ACTIONS,
  fetchLocationData
}