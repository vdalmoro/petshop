import express from "express";
import Post from "./blog.schema.js";

const app = express();

const router = app;

router.post("/post", async (req, res) => {
  const { titulo, conteudo } = req.body;
  try {
    const newPost = new Post({ titulo, conteudo });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/post", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/comentario", async (req, res) => {
  const { _id, autor, conteudo } = req.body;
  try {
    const post = await Post.findById(_id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    post.comentarios.push({ autor, conteudo });
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
