import request from 'request'

module.exports.getNearbyPlaces = async function (location, query = '') {
  const app_id = process.env.PLACES_APP_ID
  const app_code = process.env.PLACES_APP_CODE
  let options = {}
  if (query != '') {
    options = {
      url: 'https://places.cit.api.here.com/places/v1/autosuggest',
      method: 'GET',
      qs: {
        app_id,
        app_code,
        at: '40.74917,-73.98529',
        q: query
      }
    }
  } else {
    options = {
      url: 'https://places.cit.api.here.com/places/v1/discover/explore',
      method: 'GET',
      qs: {
        app_id,
        app_code,
        at: '40.74917,-73.98529'
      }
    }
  }
  return new Promise(function (resolve, reject) {
    request(options, function (error, response, body) {
      if (error) return reject(error);
      try {
        resolve(JSON.parse(body).results);
      } catch (e) {
        reject(e);
      }
    });
  });
}