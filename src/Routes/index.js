import express from "express";
import bookingRoutes from "./bookingRoute.js";
import orderRoutes from "./orderRoute.js";
import feedbackRoutes from "./feedbackRoute.js";

const router = express.Router();

// Mount subroutes
router.use('/bookings', bookingRoutes);
router.use('/orders', orderRoutes);
router.use('/feedback', feedbackRoutes);

export default router; // ✅ export the router only
