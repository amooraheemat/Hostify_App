import express from 'express';
import * as OrderController from '../Controllers/orderCtrls.js';
import { orderValidator } from '../Middlewares/validatorMiddleware.js';
import { authMiddleware } from '../Middlewares/authMiddleware.js';
import { requireRole } from '../Middlewares/roleMiddleware.js';

const router = express.Router();

router.post('/', orderValidator, OrderController.create);
router.get('/', authMiddleware, requireRole(['staff','admin']), OrderController.list);
router.patch('/:id/status', authMiddleware, requireRole(['staff','admin']), OrderController.updateStatus);

export default router;
