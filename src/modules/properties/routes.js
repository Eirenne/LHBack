const propertiesController = require('./booking.controller');
const router = require('express').Router();

/**
 * GET /api/v1/properties/:id/bookings
 */
router.get('/:id/bookings', propertiesController.fetchBookings);

module.exports = router;