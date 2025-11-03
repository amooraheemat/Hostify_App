import express from "express";
import bookingRoutes from "./booking.route.js";
import orderRoutes from "./order.route.js";
import feedbackRoutes from "./feedback.route.js";
import userRoutes from "./user.route.js"

const router = express.Router();

// Group all sub-routes here
router.use("/bookings", bookingRoutes);
router.use("/order", orderRoutes);
router.use("/feedback", feedbackRoutes);
router.use("/users", userRoutes)

export default router
