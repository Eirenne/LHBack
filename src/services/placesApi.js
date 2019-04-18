import request from 'request'

module.exports.getNearbyPlaces = function (location, query) {
  const app_id = process.env.PLACES_APP_ID
  const app_code = process.env.PLACES_APP_CODE
  const options = {
    url: 'https://places.cit.api.here.com/places/v1/discover/explore',
    method: 'GET',
    qs: {
      app_id,
      app_code,
      at: '40.74917,-73.98529'
    }
  }
  request(options, function (error, response, body) {
    try {
      const res = JSON.parse(body)
      return res.results
      
    } catch (error) {
      
    }
    
  });
}