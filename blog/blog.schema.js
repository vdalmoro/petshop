import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  autor: String,
  conteudo: String,
});

const postSchema = new mongoose.Schema({
  titulo: String,
  conteudo: String,
  comentarios: [commentSchema],
});

const Post = mongoose.model("Post", postSchema);

export default Post;
