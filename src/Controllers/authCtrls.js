import * as AuthService from '../Services/authServices.js';
import { validationResult } from 'express-validator';

export const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const user = await AuthService.registerUser(req.body);
    const { token } = await AuthService.loginUser({ email: req.body.email, password: req.body.password });
    res.status(201).json({ user: { id: user._id, name: user.name, email: user.email, role: user.role }, token });
  } catch (err) { res.status(400).json({ error: err.message }); }
};

export const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { user, token } = await AuthService.loginUser(req.body);
    res.json({ user: { id: user._id, name: user.name, email: user.email, role: user.role }, token });
  } catch (err) { res.status(400).json({ error: err.message }); }
};

export const me = async (req, res) => {
  try { const u = await AuthService.getUserById(req.user.id); res.json(u); } catch (err) { res.status(500).json({ error: err.message }); }
};

export const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;
    const UserModel = (await import('../models/User.js')).default;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(200).json({ message: 'If that email exists, a reset link has been sent.' });
    const token = AuthService.createPasswordResetToken(user._id);
    const { sendPasswordReset } = await import('../services/emailService.js');
    await sendPasswordReset({ to: email, token });
    res.json({ message: 'If that email exists, a reset link has been sent.' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    const payload = AuthService.verifyPasswordResetToken(token);
    await AuthService.resetPassword(payload.id, newPassword);
    res.json({ message: 'Password updated' });
  } catch (err) { res.status(400).json({ error: err.message }); }
};
