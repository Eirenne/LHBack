const jwt = require('jsonwebtoken');
import User from './user.model'
import Booking from '../booking/booking.model'
class UserController {

    register(req, res) {
        const { username, password } = req.body;
        const user = new User({ username, password });

        user.save(function (err) {
            if (err) {
                res.status(500)
                    .send("Error registering new user please try again.");
            } else {
                res.status(200).send("Welcome to the club!");
            }
        });
    }

    authenticate(req, res) {
        const { username, password } = req.body;
        User.findOne({ username }, function (err, user) {
            if (err) {
                res.status(500)
                    .json({
                        error: 'Internal error please try again'
                    });
            } else if (!user) {
                res.status(401)
                    .json({
                        error: 'Incorrect username or password'
                    });
            } else {
                user.isCorrectPassword(password, function (err, same) {
                    if (err) {
                        res.status(500)
                            .json({
                                error: 'Internal error please try again'
                            });
                    } else if (!same) {
                        res.status(401)
                            .json({
                                error: 'Incorrect username or password'
                            });
                    } else {
                        // Issue token
                        const payload = { username };
                        const token = jwt.sign(payload, process.env.JWT_SECRET, {
                            expiresIn: '1h'
                        });
                        res.cookie('token', token, { httpOnly: true })
                            .sendStatus(200);
                    }
                });
            }
        });
    }

    fetchBookings(req, res) {
        // const { email, password } = req.body;
        // const user = new User({ email, password });
        // user.save(function(err) {
        //     if (err) {
        //     res.status(500)
        //         .send("Error registering new user please try again.");
        //     } else {
        //     res.status(200).send("Welcome to the club!");
        //     }
        // });
    }
}

module.exports = new UserController()