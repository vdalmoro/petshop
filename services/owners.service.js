import ownersRepositories from "../repositories/owners.repositories.js";

async function createOwner(owner) {
  return await ownersRepositories.insertOwner(owner);
}

async function getOwners() {
  return await ownersRepositories.getOwners();
}

async function getOwner(id) {
  return await ownersRepositories.getOwner(id);
}

async function deleteOwner(id) {
  await ownersRepositories.deleteOwner(id);
}

async function updateOwner(owner) {
  return await ownersRepositories.updateOwner(owner);
}

export default {
  createOwner,
  getOwners,
  getOwner,
  deleteOwner,
  updateOwner,
};
