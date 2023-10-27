import sequelize from "sequelize";
import db from "../repositories/db.js";

const owner = db.define(
  "owners",
  {
    ownerid: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default owner;
