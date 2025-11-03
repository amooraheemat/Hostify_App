import express from "express";
import { createOrder, getOrders, updateOrderStatus } from "../Controllers/order.controller.js";
import { adminOnly, protect } from "../Middlewares/auth.middleware.js";
import { orderValidator } from "../validators/orderValidator.js";
import { handleValidation } from "../Middlewares/validator.middleware.js";

const router = express.Router();

router.post("/", protect, orderValidator, handleValidation, createOrder);
router.get("/", protect, getOrders);
router.patch("/:id", protect, adminOnly, updateOrderStatus);

export default router;
