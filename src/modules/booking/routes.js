const bookingController = require('./booking.controller');
const router = require('express').Router();

/**
 * POST /api/v1/booking
 */
router.post('/', bookingController.createBooking);

module.exports = router;