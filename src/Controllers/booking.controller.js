<<<<<<<< HEAD:controller/booking.controller.js
import Booking from "../model/booking.model.js";
import { validationResult } from "express-validator";
import dotenv from "dotenv";
import { sendBookingCancellation, sendBookingConfirmation } from "../Services/emailServices.js";
========
import Booking from "../Models/bookings.model.js";
import { validationResult } from "express-validator";
import { sendBookingCancellation, sendBookingConfirmation } from "../../Services/emailServices.js";

>>>>>>>> main:src/Controllers/booking.controller.js

export const createBooking = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { customerName, phoneNum,space, date, time, people,} = req.body;

    const existing = await Booking.findOne({ phoneNum, date, time });
    if (existing) return res.status(400).json({ message: "Booking already exists for this time." });

    

    const booking = await Booking.create({
      user: req.user.id,
      customerName,
      phoneNum,
      space,
      date,
      time,
      people,
      
    });

   

    await sendBookingConfirmation(booking);

    res.status(201).json({ message: "Booking created successfully",  booking });
  } catch (err) {
    next(err);
  }
};


// Get All Bookings
export const getAllBookings = async (req, res, next) => {
  try {
    
const bookings = await Booking.find().populate("user", "username email");
    res.status(200).json({message:"List of Bookings", bookings}, );
  } catch (err) {
    next(err);
  }
};

// Get One Booking
export const getOneBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  } catch (err) {
    next(err);
  }
};

// Update Booking
export const updateBooking = async (req, res, next) => {
  try {
    const updateBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!updateBooking) return res.status(404).json({ message: "Booking not found" });

    res.json({ message: "Booking updated", updateBooking });
  } catch (err) {
    next(err);
  }
};

// Delete Booking
export const deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    res.json({ message: "Booking deleted successfully", deleteBooking:booking });
  } catch (err) {
    next(err);
  }
};

// Cancel Booking
export const cancelBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id.trim());

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.status = 'Cancelled';
    await booking.save();

    const plainBooking = booking.toObject();

    
    await sendBookingCancellation(plainBooking);

    res.json({
      message: 'Booking cancelled successfully',
      booking: plainBooking,
    });
  } catch (err) {
    console.error('Error cancelling booking:', err);
    next(err);
  }
};
  
