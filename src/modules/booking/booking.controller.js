import Booking from './booking.model'
import User from '../user/user.model'
class BookingController {
    /*
        Create a booking
    */
    createBooking(req, res) {
        const { username } = req.decoded
        User.findOne({ username }, function (err, user) {
            if (err) {
                res.status(500)
                    .json({
                        error: 'Internal error please try again'
                    });
            } else if (!user) {
                res.status(401)
                    .json({
                        error: 'User Not authenticated'
                    });
            } else {
                const { property_id, property_name } = req.body;
                
                const booking = new Booking({ property_id, property_name, user: user._id});
                booking.save(function (err) {
                    if (err) {
                        res.status(500)
                            .send("Error while creating a booking.");
                    } else {
                        res.status(200).send("Booking successfully created");
                    }
                });
            }
        });    
    }
}

module.exports = new BookingController()