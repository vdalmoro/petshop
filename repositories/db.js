import dotenv from "dotenv";
import Sequelize from "sequelize";

dotenv.config();
const db = process.env.PUBLIC_URI;

const sequelize = new Sequelize(
  "postgres://ivcexhjy:l2-SaxkboQwlQ7HR2TWdNLUaxhCiDf0F@isabelle.db.elephantsql.com/ivcexhjy",
  {
    dialect: "postgrees",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
