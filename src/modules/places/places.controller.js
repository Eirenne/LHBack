import placesApi from '../../services/placesApi'
class BookingController {
    /*
        Fetch nearby places
    */
    fetchPlaces(req, res) {
        const { location, query } = req.query
        placesApi.getNearbyPlaces(location, query).then(function(result){
            res.status(200).send(result);
        }).catch(function(err){
            console.log(err)
            res.status(500)
            .send(err);
        });
    }
}

module.exports = new BookingController()