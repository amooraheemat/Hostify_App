import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { connectDatabase } from "./src/Config/db.js";
import { notFound, errorHandler } from "./src/Middlewares/error.middleware.js";
import userRoutes from "./src/Routes/user.routes.js";
import authRoutes from './src/Routes/auth.routes.js';
import bookingRoutes from './src/Routes/booking.routes.js';
import feedbackRoutes from './src/Routes/feedback.routes.js';
import orderRoutes from './src/Routes/order.routes.js';
import reportRoutes from './src/Routes/report.routes.js';

dotenv.config();
const app = express();
await connectDatabase();

// Security Middleware
app.use(helmet());

//Config Cors
const corsOptions = {
  origin: process.env.FRONTEND_URL || "https://hostify-xi.vercel.app",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));


app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

//Log Request
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'HOSTIFY API is running...',
    timestamp: new Date().toISOString()
  });
});


//API routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/user', userRoutes);


// 404 + error handlers
app.use(notFound);
app.use(errorHandler);

export default app;
