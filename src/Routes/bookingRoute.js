import express from 'express';
import * as BookingController from '../Controllers/bookingsCtrls.js'
import { bookingValidator } from '../Middlewares/validatorMiddleware.js';
import { authMiddleware } from '../Middlewares/authMiddleware.js';
import { requireRole } from '../Middlewares/roleMiddleware.js';

const router = express.Router();

router.post('/', bookingValidator, BookingController.create);
router.get('/', authMiddleware, requireRole(['staff','admin']), BookingController.list);
router.patch('/:id/cancel', authMiddleware, requireRole(['staff','admin']), BookingController.cancel);

export default router;
