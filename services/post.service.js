import postRepositories from "../repositories/post.repositories.js";

async function createPost(post) {
  await postRepositories.createPost(post);
}

async function getPost(id) {
  await postRepositories.getPost(id);
}

async function createComent(coment, id) {
  await postRepositories.createComent(coment, id);
}

export default {
  createPost,
  getPost,
  createComent,
};
