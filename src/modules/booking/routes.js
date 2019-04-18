const bookingController = require('./booking.controller');
const router = require('express').Router();
import auth from '../../middlewares/isAuthenticated'
/**
 * POST /api/v1/booking
 */
router.post('/', auth.isAuthenticated, bookingController.createBooking);

module.exports = router;