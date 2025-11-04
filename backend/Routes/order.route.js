import express from "express";
import { createOrder, getOrders, updateOrderStatus } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { orderValidator } from "../validators/orderValidator.js";
import { handleValidation } from "../middleware/validateMiddleware.js";

const router = express.Router();

router.post("/", protect, orderValidator, handleValidation, createOrder);
router.get("/", protect, getOrders);
router.patch("/:id", protect, authorizeRoles("admin"), updateOrderStatus);

export default router;
