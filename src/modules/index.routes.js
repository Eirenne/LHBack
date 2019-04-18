
import express from 'express';
import userRoutes from './user/routes';
import bookingRoutes from './booking/routes';
import auth from '../middlewares/isAuthenticated'
import places from '../services/placesApi'

const router = express.Router()

router.get('/ping', auth.isAuthenticated, (req, res) => {
  console.log(req.decoded)
  res.json(places.getNearbyPlaces('hmm'))
}
  
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount booking routes at /booking
router.use('/bookings', bookingRoutes);

export default router;