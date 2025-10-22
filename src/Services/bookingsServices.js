
import Bookings from '../modules/bookings.js';
import { sendBookingConfirmation } from '../Services/emailServices.js';

export const createBooking = async (data) => {
  const booking = await Bookings.create(data);
  if (data.email) {
    try { await sendBookingConfirmation({ to: data.email, booking }); } catch (err) { console.warn('Booking email failed', err.message); }
  }
  return booking;
};

export const getBookings = async (filter = {}) => Booking.find(filter).sort({ date: 1, time: 1 });
export const cancelBooking = async (id) => Bookings.findByIdAndUpdate(id, { status: 'Cancelled' }, { new: true });
