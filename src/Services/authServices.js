import User from '../modules/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = 12;

export const registerUser = async ({ name, email, password, role = 'customer' }) => {
  const exists = await User.findOne({ email });
  if (exists) throw new Error('Email already registered');
  const hashpassword = await bcrypt.hash(password, SALT_ROUNDS);
  const user = await User.create({ name, email, password: hashpassword, role });
  return user;
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  });
  return { user, token };
};

export const getUserById = async (id) => User.findById(id).select('-password');

export const createPasswordResetToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

export const verifyPasswordResetToken = (token) =>
  jwt.verify(token, process.env.JWT_SECRET);

export const resetPassword = async (userId, newPassword) => {
  const hashed = await bcrypt.hash(newPassword, SALT_ROUNDS);
  return User.findByIdAndUpdate(userId, { password: hashed }, { new: true });
};