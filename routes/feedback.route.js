import express from "express";
import { createFeedback, getAllFeedback } from "../controllers/feedbackController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { feedbackValidator } from "../validators/feedbackValidator.js";
import { handleValidation } from "../middleware/validateMiddleware.js";

const router = express.Router();

router.post("/", protect, feedbackValidator, handleValidation, createFeedback);
router.get("/", protect, authorizeRoles("admin"), getAllFeedback);

export default router;

