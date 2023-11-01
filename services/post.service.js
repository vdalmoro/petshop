import postRepositories from "../repositories/post.repositories.js";

async function createPost(post) {
  return await postRepositories.createPost(post);
}

async function updatePost(post) {
  return await postRepositories.updatePost(post);
}

async function getPost(id) {
  return await postRepositories.getPost(id);
}

async function getPosts() {
  return await postRepositories.getPosts();
}

async function createComent(coment) {
  return await postRepositories.createComent(coment);
}

export default {
  createPost,
  updatePost,
  getPost,
  getPosts,
  createComent,
};
