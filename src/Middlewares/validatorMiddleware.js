import { body } from 'express-validator';

export const registerValidator = [
  body('name').notEmpty().withMessage('Name required'),
  body('email').isEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 6 }).withMessage('Password min 6 chars')
];

export const loginValidator = [
  body('email').isEmail().withMessage('Valid email required'),
  body('password').notEmpty().withMessage('Password required')
];

export const bookingValidator = [
  body('name').notEmpty(),
  body('phone').notEmpty(),
  body('date').notEmpty(),
  body('time').notEmpty(),
  body('people').isInt({ min: 1 })
];

export const orderValidator = [
  body('customerName').notEmpty(),
  body('items').isArray({ min: 1 }).withMessage('At least one item required'),
  body('items.*.menuItemId').notEmpty(),
  body('items.*.quantity').isInt({ min: 1 })
];

export const feedbackValidator = [
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating 1-5 required')
];
