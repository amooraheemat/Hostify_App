import express from "express";
import { createFeedback, getAllFeedback } from "../Controllers/feedback.controller.js";
import { protect } from "../Middlewares/auth.middleware.js";
import { authorizeRoles } from "../Middlewares/role.middleware.js";
import { feedbackValidator } from "../Validators/feedbackValidator.js";
import { handleValidation } from "../Middlewares/validateMiddleware.js";

const router = express.Router();

router.post("/", protect, feedbackValidator, handleValidation, createFeedback);
router.get("/", protect, authorizeRoles("admin"), getAllFeedback);

export default router;

