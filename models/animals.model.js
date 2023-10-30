import Sequelize from "sequelize";
import db from "../repositories/db.js";
import owner from "./owners.model.js";

const animal = db.define(
  "animais",
  {
    animalId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

animal.belongsTo(owner, { foreignKey: "proprietarioId" });

export default animal;
