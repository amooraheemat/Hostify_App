import express from "express";
import { createOrder, getOrders, updateOrderStatus } from "../Controllers/order.controller.js";
import { protect } from "../Middlewares/auth.middleware.js";
//import { authorizeRoles } from "../Middlewares/roleMiddleware.js";
import { orderValidator } from "../Validators/orderValidator.js";
import { handleValidation } from "../Middlewares/validator.middleware.js";

const router = express.Router();

router.post("/", protect, orderValidator, handleValidation, createOrder);
router.get("/", protect, getOrders);
//router.patch("/:id", protect, authorizeRoles("admin"), updateOrderStatus);

export default router;
