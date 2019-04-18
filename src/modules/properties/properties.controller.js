import Booking from '../booking/booking.model'
class PropertiesController {
    /*
        Fetch bookings by property id
    */ 
    fetchBookings(req, res) {
        const { property_id } = req.para,s
        Booking.find({ property_id })
            .populate('user')
            .exec(function (err, bookings) {
                if (err) {
                    res.status(500)
                        .send("Error fetching bookings");
                } else {
                    res.status(200).send(bookings);
                }
            })
    }
}

module.exports = new PropertiesController()