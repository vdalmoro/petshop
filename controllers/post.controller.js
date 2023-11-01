import postService from "../services/post.service.js";

async function createPost(req, res, next) {
  try {
    let post = req.body;
    if (!post.titulo || !post.conteudo) {
      throw new Error("Titulo e conteudo são obrigatorios.");
    }
    await postService.createPost(post);
    res.send();
    logger.info(`POST /post - ${JSON.stringify(post)}`);
  } catch (err) {
    next(err);
  }
}

async function getPost(req, res, next) {
  try {
    res.send(await postService.getPost());
    logger.info("GET /post");
  } catch (err) {
    next(err);
  }
}

async function getPosts(req, res, next) {
  try {
    const post = await postService.getPosts();
    res.json(post);
    logger.info("GET /post");
  } catch (err) {
    next(err);
  }
}

async function createComent(req, res, next) {
  try {
    let params = req.body;
    if (!params.id || !params.coment) {
      throw new Error("Post ID e Coment são obrigatorios.");
    }
    await postService.createComent(params.coment, params.id);
    res.end();
  } catch (err) {
    next(err);
  }
}

export default {
  createPost,
  getPost,
  getPosts,
  createComent,
};
