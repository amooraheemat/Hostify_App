import * as MenuService from '../Services/menuServices.js';
import { validationResult } from 'express-validator';

export const createMenuItem = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try { res.status(201).json(await MenuService.addMenuItem(req.body)); } catch (err) { res.status(500).json({ error: err.message }); }
};

export const getMenuItems = async (req, res) => {
  try { const filter = req.query.category ? { category: req.query.category } : {}; res.json(await MenuService.getMenu(filter)); } catch (err) { res.status(500).json({ error: err.message }); }
};

export const updateMenuItem = async (req, res) => {
  try { res.json(await MenuService.updateMenuItem(req.params.id, req.body)); } catch (err) { res.status(500).json({ error: err.message }); }
};

export const deleteMenuItem = async (req, res) => {
  try { await MenuService.deleteMenuItem(req.params.id); res.json({ message: 'Deleted' }); } catch (err) { res.status(500).json({ error: err.message }); }
};
