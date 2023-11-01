import mongoose from "mongoose";

async function connect() {
  const uri = "mongodb+srv://vdalmoro:hunted@cluster0.xkokta8.mongodb.net/";
  return await mongoose.connect(uri);
}

export { connect };
