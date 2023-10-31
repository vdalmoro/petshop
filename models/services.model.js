import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Animal from "./animals.model.js";

const service = db.define(
  "servicos",
  {
    servicoId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
  },
  { underscored: true }
);

service.belongsTo(Animal, { foreignKey: "animalId" });

export default service;
