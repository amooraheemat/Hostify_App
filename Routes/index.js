import express from 'express';
import bookingRoutes from './bookingRoute.js';

const router = express.Router();

router.use('/bookings', bookingRoutes);
export default router;
