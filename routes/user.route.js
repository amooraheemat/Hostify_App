import express from "express";
import { getAllUsers, getUserById, deleteUser } from "../controller/user.controller.js";
import { protect, adminOnly } from "../middleware/authmiddleware.js";

const router = express.Router();

//Admin: get all users
router.get("/", protect, adminOnly, getAllUsers);

//Logged-in user or admin: get one user
router.get("/:id", protect, getUserById);

//Admin: delete user
router.delete("/:id", protect, adminOnly, deleteUser);

export default router;
