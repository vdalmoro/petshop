import express from "express";
import servicesController from "../controllers/services.controller.js";

const router = express.Router();

router.post("/", servicesController.createService);
router.get("/", servicesController.getServices);
router.get("/:id", servicesController.getService);

export default router;
