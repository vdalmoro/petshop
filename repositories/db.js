import sequelize from "sequelize";

const sequelize = new sequelize(
  "postgres://ivcexhjy:l2-SaxkboQwlQ7HR2TWdNLUaxhCiDf0F@isabelle.db.elephantsql.com/ivcexhjy",
  {
    dialect: "postgrees",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
