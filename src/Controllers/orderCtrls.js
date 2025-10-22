import * as OrderService from '../Services/orderServices.js';
import { validationResult } from 'express-validator';

export const create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try { const o = await OrderService.createOrder(req.body); res.status(201).json(o); } catch (err) { res.status(500).json({ error: err.message }); }
};

export const list = async (req, res) => {
  try { const filter = {}; if (req.query.status) filter.status = req.query.status; res.json(await OrderService.getOrders(filter)); } catch (err) { res.status(500).json({ error: err.message }); }
};

export const updateStatus = async (req, res) => {
  try { res.json(await OrderService.updateOrderStatus(req.params.id, req.body.status)); } catch (err) { res.status(500).json({ error: err.message }); }
};
