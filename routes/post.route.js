import express from "express";
import postController from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", postController.createPost);
router.post("/coment", postController.createComent);

export default router;
