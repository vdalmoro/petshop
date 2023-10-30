import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Animal from "./animals.model.js";

const service = db.define(
  "services",
  {
    serviceid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    desc: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    value: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
  },
  { underscored: true }
);

service.belongsTo(Animal, { foreignKey: "animalId" });

export default service;
