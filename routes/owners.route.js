import express from "express";
import OwnersController from "../controllers/owners.controller.js";

const router = express.Router();

router.post("/", OwnersController.createOwner);

export default router;
