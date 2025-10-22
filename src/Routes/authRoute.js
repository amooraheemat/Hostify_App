import express from 'express';
import { body } from 'express-validator';
import * as AuthController from '../Controllers/authCtrls.js';
import { registerValidator, loginValidator } from '../Middlewares/validatorMiddleware.js';

const router = express.Router();

router.post('/register', registerValidator, AuthController.register);
router.post('/login', loginValidator, AuthController.login);
router.get('/me', AuthController.me); 
router.post('/request-reset', body('email').isEmail(), AuthController.requestPasswordReset);
router.post('/reset-password', body('token').notEmpty(), body('newPassword').isLength({ min: 6 }), AuthController.resetPassword);

export default router;
