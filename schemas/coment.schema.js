import mongoose from "mongoose";

const ComentSchema = new mongoose.Schema(
  {
    nome: String,
    conteudo: String,
  },
  { collection: "posts" }
);

export default ComentSchema;
