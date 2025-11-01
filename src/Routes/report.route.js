import express from "express";
import { protect, adminOnly } from "../middleware/authmiddleware.js";
import {
  createReport,
  getAllReports,
  getOneReport,
  updateReport,
  deleteReport,
} from "../controllers/report.controller.js";


const router = express.Router();

// Admin can create report
router.post("/", protect, createReport);       

// Only admin sees all reports
router.get("/", protect, adminOnly, getAllReports); 

// Admin views just one report by id
router.get("/:id", protect, getOneReport);

// Admin can update report
router.put("/:id", protect, updateReport);    

// Admin can delete report
router.delete("/:id", protect, adminOnly, deleteReport); 

export default router;
