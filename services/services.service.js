import owner from "../models/owners.model.js";
import servicesRepositories from "../repositories/services.repositories.js";

async function createService(service) {
  return await servicesRepositories.createServiceService(service);
}

async function getServices(animalId, proprietarioId) {
  if (animalId) {
    return await servicesRepositories.getServicesByAnimal(animalId);
  }
  if (proprietarioId) {
    return await servicesRepositories.getServicesByProp(proprietarioId);
  }
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
