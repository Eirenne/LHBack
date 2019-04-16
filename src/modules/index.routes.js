
import express from 'express';
import userRoutes from './user/routes';
import bookingRoutes from './booking/routes';

const router = express.Router()

router.get('/ping', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount booking routes at /booking
router.use('/booking', bookingRoutes);

export default router;