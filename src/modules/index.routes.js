
import express from 'express';
import userRoutes from './user/routes';
import bookingRoutes from './booking/routes';
import placesRoutes from './places/routes';
import propertiesRoutes from './places/routes';
import auth from '../middlewares/isAuthenticated'
import places from '../services/placesApi'

const router = express.Router()

router.get('/checkToken', auth.isAuthenticated, (req, res) =>  {
  res.sendStatus(200);
});

// mount user routes at /users
router.use('/users', userRoutes);

// mount booking routes at /booking
router.use('/bookings', bookingRoutes);

// mount places routes at /places
router.use('/places', placesRoutes);

// mount properties routes at /properties
router.use('/properties', propertiesRoutes);

export default router;