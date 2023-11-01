import postService from "../services/post.service.js";

async function createPost(req, res, next) {
  try {
    let post = req.body;
    if (!post.titulo || !post.conteudo) {
      throw new Error("Titulo e conteudo são obrigatorios.");
    }
    await postService.createPost(post);
    res.end();
    logger.info(`POST /post - ${JSON.stringify(post)}`);
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
  createComent,
};
