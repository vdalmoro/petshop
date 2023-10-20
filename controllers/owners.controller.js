import ownersService from "../services/owners.service";

async function createOwner(req, res, next) {
  try {
    let owner = req.body;
    if (!owner.name || !owner.phone) {
      throw new Error("Name e Phone são obrigatorios.");
    }
    res.send(await ownersService.createOwner(owner));
    loggers.info(`POST /owner - ${JSON.stringfy(owner)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createOwner,
};
