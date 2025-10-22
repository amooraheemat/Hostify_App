import * as FeedbackService from '../Services/feedbackServices.js'
import { validationResult } from 'express-validator';

export const create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try { res.status(201).json(await FeedbackService.addFeedback(req.body)); } catch (err) { res.status(500).json({ error: err.message }); }
};

export const list = async (req, res) => {
  try { res.json(await FeedbackService.getFeedback()); } catch (err) { res.status(500).json({ error: err.message }); }
};

export const summary = async (req, res) => {
  try { res.json(await FeedbackService.feedbackSummary()); } catch (err) { res.status(500).json({ error: err.message }); }
};
