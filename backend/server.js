import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./Config/db.js";
import { notFound, errorHandler } from './Middlewares/errorMiddleware.js'
import bookingRoutes from "./Routes/booking.route.js"; 
import feedbackRoutes from './Routes/feedback.route.js';
import orderRoutes from './Routes/order.route.js';
import reportRoutes from './Routes/report.route.js';
import userRoutes from "./Routes/user.route.js";


dotenv.config();
connectDatabase();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
app.use("/api/feedback", feedbackRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/users", userRoutes);
app.use('/api/bookings', bookingRoutes)

// basic health
app.use(notFound);
app.use(errorHandler);

//Default route
app.get("/", (req, res) => {
  res.send("HOSTIFY API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => connectDatabase(),
console.log(`Server running on port ${PORT}`));