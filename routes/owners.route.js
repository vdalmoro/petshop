import express from "express";
import ownersController from "../controllers/owners.controller.js";

const router = express.Router();

router.post("/", ownersController.createOwner);
router.get("/", ownersController.getOwners);
router.get("/:id", ownersController.getOwner);
router.delete("/:id", ownersController.deleteOwner);
router.put("/", ownersController.updateOwner);

export default router;
