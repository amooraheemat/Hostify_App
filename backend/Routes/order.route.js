import express from "express";
import { createOrder, getallOrders, updateOrderStatus, deleteOrder } from "../Controllers/order.controller.js";
import { protect, adminOnly } from "../Middlewares/auth.middleware.js";
import { orderValidator } from "../Validators/orderValidator.js";
import { handleValidation } from "../Middlewares/validator.middleware.js";

const router = express.Router();

router.post("/create", protect, orderValidator, handleValidation, createOrder);
router.get("/", protect, getallOrders);
router.patch("/:id", protect, adminOnly, updateOrderStatus);
router.delete("/delete/:id",protect, deleteOrder);

export default router;