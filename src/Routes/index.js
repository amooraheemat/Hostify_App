import express from 'express';
import bookingRoutes from './booking.route.js';

const router = express.Router();

router.use('/bookings', bookingRoutes);


import express from "express";
import orderRoutes from "./routes/orderRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/order", orderRoutes);
app.use("/api/feedback", feedbackRoutes);

export default {app, router};
