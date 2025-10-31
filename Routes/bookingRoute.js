
import express from "express";
import {
  createBooking,
  cancelBooking,
  updateBooking,
  deleteBooking,
  getAllBookings,
  getOneBooking
} from "../Controllers/bookingsCtrls.js";
import {  bookingValidator } from "../Middlewares/validatorMiddleware.js";
import { protect } from "../Middlewares/bookingMiddleware.js";

const router = express.Router();

// Booking registration
router.post("/book", bookingValidator, createBooking);


// Authenticated booking routes
router.get("/viewbooking/:id",protect, getOneBooking);
router.put("/update",protect, updateBooking);
router.patch('/cancel/:id',protect, cancelBooking);
router.delete("/delete/:id",protect, deleteBooking);
router.get("/all", getAllBookings);

export default router;


