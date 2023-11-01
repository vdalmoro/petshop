import mongoose from "mongoose";
import ComentSchema from "./coment.schema.js";

const PostSchema = new mongoose.Schema(
  {
    titulo: String,
    conteudo: String,
    comentarios: [ComentSchema],
  },
  { collection: "posts" }
);

export default PostSchema;
