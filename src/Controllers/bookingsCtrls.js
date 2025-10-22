import * as BookingService from '../Services/bookingsServices.js';
import { validationResult } from 'express-validator';

export const create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try { const b = await BookingService.createBooking(req.body); res.status(201).json(b); } catch (err) { res.status(500).json({ error: err.message }); }
};

export const list = async (req, res) => {
  try { const filter = {}; if (req.query.date) filter.date = req.query.date; res.json(await BookingService.getBookings(filter)); } catch (err) { res.status(500).json({ error: err.message }); }
};

export const cancel = async (req, res) => {
  try { res.json(await BookingService.cancelBooking(req.params.id)); } catch (err) { res.status(500).json({ error: err.message }); }
};
