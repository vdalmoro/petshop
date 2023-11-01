import { ObjectId } from "mongodb/lib/bson.js";
import { connect } from "./mongo.db.js";
import PostSchema from "../schemas/post.schema.js";

async function createPost(post) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("posts", PostSchema);
    post = new Post(post);
    await post.save();
  } catch (err) {
    throw err;
  }
}

async function updatePost(post) {
  try {
    const mongoose = await connect();
    const postId = new ObjectId(post._id);
    const Post = mongoose.model("posts", PostSchema);
    await Post.findOneAndUpdate({ _id: postId }, post);
  } catch (err) {
    throw err;
  }
}

async function getPost(id) {
  try {
    const mongoose = await connect();
    const postId = new ObjectId(id);
    const Post = mongoose.model("posts", PostSchema);
    const query = await Post.findOne({ _id: postId });
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function getPosts() {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("posts", PostSchema);
    const query = await Post.find({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

export default {
  createPost,
  updatePost,
  getPost,
  getPosts,
};
