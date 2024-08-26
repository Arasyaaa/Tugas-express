import express from "express";
import { createBuah, deleteBuah, getBuah, getBuahById, updateBuah } from "../Controllers/buahController.js";

const router = express.Router();

router.get("/", getBuah)
router.get("/find", getBuahById);
router.post("/create", createBuah);
router.put("/update", updateBuah);
router.delete("/delete", deleteBuah);

export default router;