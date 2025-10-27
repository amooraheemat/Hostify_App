import express from "express";
import { registerUser, loginUser } from "../controller/auth.controller.js";

const router = express.Router();

//AUTH Routes
router.post("/register", registerUser);
router.post("/login", loginUser);


export default router;