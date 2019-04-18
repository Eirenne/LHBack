
const userController = require('./user.controller');
const router = require('express').Router();

/**
 * POST /api/v1/users
 */
router.post('/', userController.register);

/**
 * POST /api/v1/users/authenitcate
 */
router.post('/authenticate', userController.authenticate);

/**
 * GET /api/v1/users/:id/bookings
 */
router.get('/:id/bookings', userController.fetchBookings);

module.exports = router;
