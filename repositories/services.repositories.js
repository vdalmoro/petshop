import { connect } from "./db.js";

async function insertService(service) {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO servicos (descricao, valor, animal_id) VALUES ($1, $2, $3) RETURNING *";
    const values = [service.desc, service.value, service.animal_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getServices() {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM servicos");
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getServicesByOwner(ownerid) {
  const conn = await connect();
  try {
    const res = await conn.query(
      "SELECT * FROM animais WHERE proprietario_id = $1",
      [ownerid]
    );
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getService(id) {
  const conn = await connect();
  try {
    const res = await conn.query(
      "SELECT * FROM servicos WHERE service_id = $1",
      [id]
    );
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updateService(service) {
  const conn = await connect();
  try {
    const sql =
      "UPDATE servicos SET descricao = $1, valor = $2, animal_id = $3  WHERE service_id = $4 RETURNING *";
    const values = [
      service.desc,
      service.value,
      service.animal_id,
      service.service_id,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function deleteService(id) {
  const conn = await connect();
  try {
    await conn.query("DELETE FROM servicos WHERE service_id = $1 ", [id]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default {
  insertService,
  getService,
  getServices,
  getServicesByOwner,
  updateService,
  deleteService,
};
