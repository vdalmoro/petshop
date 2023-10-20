import ownersRepositories from "../repositories/owners.repositories.js";

async function createOwner(owner) {
  return await ownersRepositories.insertOwner(owner);
}

export default {
  createOwner,
};
