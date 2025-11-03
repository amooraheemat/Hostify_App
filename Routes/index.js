import express from 'express';
import bookingRoutes from './booking.route.js';

const router = express.Router();

router.use('/bookings', bookingRoutes);
export default router;
