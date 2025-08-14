import db from "../connection.js";

export async function getTallasPaginadas(limit, offset) {
  const [rows] = await db.query("SELECT * FROM cat_tallas LIMIT ? OFFSET ?", [
    limit,
    offset,
  ]);
  return rows;
}

export async function getTallasCount() {
  const [rows] = await db.query('SELECT COUNT(*) as total FROM cat_tallas');
  return rows[0].total;
}

export async function createTalla(data) {
  if (!data) throw new Error("No se recibieron datos para crear la talla");
  const { name, codigoTalla } = data;
  const [result] = await db.query(
    `INSERT INTO cat_tallas (name, codigoTalla) VALUES (?, ?)`,
    [name, codigoTalla]
  );
  return result;
}

export async function updateTalla(id, data) {
  const { name, codigoTalla } = data;
  const [result] = await db.query(
    `UPDATE cat_tallas SET name = ?, codigoTalla = ? WHERE id = ?`,
    [name, codigoTalla, id]
  );
  return result;
}

export async function getTallaById(id) {
  const [rows] = await db.query("SELECT * FROM cat_tallas WHERE id = ?", [id]);
  return rows[0];
}

export async function getAllTallas() {
  const [rows] = await db.query("SELECT * FROM cat_tallas");
  return rows;
}
