import Service from "../models/services.model.js";
import Animal from "../models/animals.model.js";

async function createService(service) {
  try {
    return await Service.create(service);
  } catch (err) {
    throw err;
  }
}

async function getServices() {
  try {
    return await Service.findAll({
      include: [
        {
          model: Animal,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getServicesByAnimal(animalId) {
  try {
    return await Service.findAll({
      where: {
        animalId,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getServicesByProp(proprietarioId) {
  try {
    return await Service.findAll({
      include: [
        {
          model: Animal,
          where: {
            proprietarioId,
          },
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getService(id) {
  try {
    return await Service.findByPk(id);
  } catch (err) {
    throw err;
  }
}

export default {
  createService,
  getService,
  getServices,
  getServicesByAnimal,
  getServicesByProp,
};
