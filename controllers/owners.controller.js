import ownersService from "../services/owners.service.js";

async function createOwner(req, res, next) {
  try {
    let owner = req.body;
    if (!owner.nome || !owner.telefone) {
      throw new Error("Name e Phone são obrigatorios.");
    }
    owner = await ownersService.createOwner(owner);
    res.send(owner);
    logger.info(`POST /owner - ${JSON.stringify(owner)}`);
  } catch (err) {
    next(err);
  }
}

async function getOwners(req, res, next) {
  try {
    res.send(await ownersService.getOwners());
    logger.info("GET /owners");
  } catch (err) {
    next(err);
  }
}

async function getOwner(req, res, next) {
  try {
    res.send(await ownersService.getOwner(req.params.id));
    logger.info("GET /owner/id");
  } catch (err) {
    next(err);
  }
}

async function deleteOwner(req, res, next) {
  try {
    await ownersService.deleteOwner(req.params.id);
    res.end();
    logger.info("DELETE /owner/id");
  } catch (err) {
    next(err);
  }
}

async function updateOwner(req, res, next) {
  try {
    let owner = req.body;
    if (!owner.proprietarioId || !owner.nome || !owner.telefone) {
      throw new Error("Client ID, Name e Phone são obrigatorios.");
    }
    owner = await ownersService.updateOwner(owner);
    res.send(owner);
    logger.info(`PUT /owner - ${JSON.stringify(owner)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createOwner,
  getOwners,
  getOwner,
  deleteOwner,
  updateOwner,
};
