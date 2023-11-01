import { ObjectId } from "mongodb/lib/bson.js";
import { getClient } from "./mongo.db.js";

async function createPost(post) {
  const client = getClient();
  try {
    await client.connect();
    await client.db("store").collection("posts").insertOne(post);
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}
/*
async function updatePost(post){
  const client = getClient();
  try {
    await client.connect();
    await client.db("store").collection("posts").updateOne(
      {postId: }

    );
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}
*/
async function getPost(postId) {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db("store")
      .collection("posts")
      .findOne(ObjectId(postId));
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

export default {
  createPost,
  getPost,
};
