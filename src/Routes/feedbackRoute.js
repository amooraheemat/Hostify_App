import express from 'express';
import * as FeedbackController from '../Controllers/feedbackCtrls.js';
import { feedbackValidator } from '../Middlewares/validatorMiddleware.js';

const router = express.Router();

router.post('/', feedbackValidator, FeedbackController.create);
router.get('/', FeedbackController.list);
router.get('/summary', FeedbackController.summary);

export default router;
