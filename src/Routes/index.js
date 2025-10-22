import express from 'express';
import authRoutes from './authRoute.js';
import bookingRoutes from './bookingRoute.js';
import menuRoutes from './menuRoute.js';
import orderRoutes from './orderRoutes.js';
import feedbackRoutes from './feedbackRoute.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/bookings', bookingRoutes);
router.use('/menu', menuRoutes);
router.use('/orders', orderRoutes);
router.use('/feedback', feedbackRoutes);

export default router;
