import express from "express";
import animalsController from "../controllers/animals.controller.js";

const router = express.Router();

router.post("/", animalsController.createAnimal);
router.get("/", animalsController.getAnimals);
router.get("/:id", animalsController.getAnimal);
router.delete("/:id", animalsController.deleteAnimal);
router.put("/", animalsController.updateAnimal);

export default router;
