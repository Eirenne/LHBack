const placesController = require('./places.controller');
const router = require('express').Router();
import auth from '../../middlewares/isAuthenticated'
/**
 * GET /api/v1/places
 */
router.get('/', auth.isAuthenticated, placesController.fetchPlaces);

module.exports = router;