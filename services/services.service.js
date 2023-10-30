import servicesRepositories from "../repositories/services.repositories.js";
import animalsRepositories from "../repositories/animals.repositories.js";

async function createService(service) {
  return await servicesRepositories.insertService(service);
}

async function getServices() {
  return await servicesRepositories.getServices();
}

async function getService(id) {
  return await servicesRepositories.getService(id);
}

async function deleteService(id) {
  return await servicesRepositories.deleteService(id);
}

async function updateService(service) {
  return await servicesRepositories.updateService(service);
}

export default {
  createService,
  getServices,
  getService,
  deleteService,
  updateService,
};
