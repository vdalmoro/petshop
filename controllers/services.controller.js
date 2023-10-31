import servicesService from "../services/services.service.js";

async function createService(req, res, next) {
  try {
    let service = req.body;
    if (!service.descricao || !service.valor || !service.animalId) {
      throw new Error("Desc, value e animal são obrigatorios.");
    }
    service = await servicesService.createService(service);
    res.send(service);
    logger.info(`POST /service - ${JSON.stringify(service)}`);
  } catch (err) {
    next(err);
  }
}

async function getServices(req, res, next) {
  try {
    res.send(
      await servicesService.getServices(
        req.query.animalId,
        req.query.proprietarioId
      )
    );
    logger.info("GET /services");
  } catch (err) {
    next(err);
  }
}

async function getService(req, res, next) {
  try {
    res.send(await servicesService.getService(req.params.id));
    logger.info("GET /service/id");
  } catch (err) {
    next(err);
  }
}

export default {
  createService,
  getServices,
  getService,
};
