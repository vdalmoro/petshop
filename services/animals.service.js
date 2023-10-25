import animalsRepositories from "../repositories/animals.repositories.js";
import ownersRepositories from "../repositories/owners.repositories.js";

async function createAnimal(animal) {
  if (await ownersRepositories.getOwner(animal.proprietario_id)) {
    return await animalsRepositories.insertAnimal(animal);
  }
  throw new Error("O proprietario_id informado não existe.");
}

async function getAnimals(id) {
  if (id) {
    return await animalsRepositories.getAnimalsByOwner(id);
  }
  return await animalsRepositories.getAnimals();
}

async function getAnimal(id) {
  return await animalsRepositories.getAnimal(id);
}

async function deleteAnimal(id) {
  await animalsRepositories.deleteAnimal(id);
}

async function updateAnimal(animal) {
  if (await ownersRepositories.getOwner(animal.proprietario_id)) {
    return await animalsRepositories.updateAnimal(animal);
  }
  throw new Error("O proprietario_id informado não existe.");
}

export default {
  createAnimal,
  getAnimals,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
