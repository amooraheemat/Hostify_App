import Booking from '../models/Booking.js';
import Order from '../models/Order.js';
import * as FeedbackService from '../services/feedbackService.js';

export const staffReport = async (req, res) => {
  try {
    const bookingsCount = await Booking.countDocuments({ status: 'Booked' });
    const date = req.query.date || new Date().toISOString().slice(0,10);
    const todaysBookings = await Booking.find({ date });
    const pendingOrders = await Order.find({ status: { $in: ['Pending', 'Preparing'] } }).populate('items.menuItem');
    const feedback = await FeedbackService.feedbackSummary();
    res.json({ bookingsCount, todaysBookings, pendingOrders, feedback });
  } catch (err) { res.status(500).json({ error: err.message }); }
};
