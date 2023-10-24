import animalsRepositories from "../repositories/animals.repositories.js";

async function createAnimal(animal) {
  return await animalsRepositories.insertAnimal(animal);
}

async function getAnimals() {
  return await animalsRepositories.getAnimals();
}

async function getAnimal(id) {
  return await animalsRepositories.getAnimal(id);
}

async function deleteAnimal(id) {
  await animalsRepositories.deleteAnimal(id);
}

async function updateAnimal(animal) {
  return await animalsRepositories.updateAnimal(animal);
}

export default {
  createAnimal,
  getAnimals,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
