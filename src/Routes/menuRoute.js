import express from 'express';
import { body } from 'express-validator';
import * as MenuController from '../Controllers/menuCtrls.js';
import { authMiddleware } from '../Middlewares/authMiddleware.js';
import { requireRole } from '../Middlewares/roleMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, requireRole(['staff','admin']), [body('name').notEmpty(), body('category').isIn(['Food','Drink']), body('price').isNumeric()], MenuController.createMenuItem);
router.get('/', MenuController.getMenuItems);
router.put('/:id', authMiddleware, requireRole(['staff','admin']), MenuController.updateMenuItem);
router.delete('/:id', authMiddleware, requireRole(['staff','admin']), MenuController.deleteMenuItem);

export default router;
