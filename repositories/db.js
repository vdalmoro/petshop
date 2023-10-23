import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString:
      "postgres://ivcexhjy:l2-SaxkboQwlQ7HR2TWdNLUaxhCiDf0F@isabelle.db.elephantsql.com/ivcexhjy",
  });
  global.connection = pool;
  return pool.connect();
}

export { connect };
