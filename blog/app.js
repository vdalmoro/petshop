import express from "express";
import bodyParser from "body-parser";
import Post from "./blog.schema.js";
import { connect } from "./mongodb.js";
import mongoose from "mongoose";
import postRoutes from "./app.router.js";

const app = express();
app.use(bodyParser.json());

app.use(express.json());
app.use(postRoutes);

mongoose
  .connect("mongodb+srv://vdalmoro:hunted@cluster0.xkokta8.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });

// Endpoint para cadastro de um post
app.post("/post", async (req, res) => {
  try {
    await Post.save();
    res.json(Post);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o post" });
  }
});

// Endpoint para consulta de todos os posts com comentários
app.get("/post", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os posts" });
  }
});

// Endpoint para cadastro de um comentário em um post específico
app.post("/comentario1", async (req, res) => {
  try {
    const { postId, autor, conteudo } = req.body;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post não encontrado" });
    }
    post.comentarios.push({ autor, conteudo });
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Erro ao adicionar o comentário" });
  }
});

app.listen(3001, () => {
  console.log("Servidor está ouvindo na porta 3000");
});
