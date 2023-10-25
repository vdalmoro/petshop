import animalsService from "../services/animals.service.js";

async function createAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (!animal.name || !animal.type || !animal.proprietario_id) {
      throw new Error("Name, type e owner são obrigatorios.");
    }
    animal = await animalsService.createAnimal(animal);
    res.send(animal);
    logger.info(`POST /animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function getAnimals(req, res, next) {
  try {
    res.send(await animalsService.getAnimals(req.query.proprietario_id));
    logger.info("GET /animals");
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  try {
    res.send(await animalsService.getAnimal(req.params.id));
    logger.info("GET /animal/id");
  } catch (err) {
    next(err);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    await animalsService.deleteAnimal(req.params.id);
    res.end();
    logger.info("DELETE /animal/id");
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (!animal.animal_id || !animal.name || !animal.type) {
      throw new Error("Animal ID, Name e type são obrigatorios.");
    }
    animal = await animalsService.updateAnimal(animal);
    res.send(animal);
    logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAnimal,
  getAnimals,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
