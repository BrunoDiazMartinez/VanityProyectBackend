import db from "../connection.js";

export async function getColoresPaginados(limit, offset) {
  const [rows] = await db.query("SELECT * FROM cat_colores LIMIT ? OFFSET ?", [limit, offset]);
  return rows;
}

export async function getColoresCount() {
  const [rows] = await db.query("SELECT COUNT(*) as total FROM cat_colores");
  return rows[0].total;
}

export async function createColor(data) {
  if (!data) throw new Error("No se recibieron datos para crear el color");
  const { name, codigoClr } = data;
  const [result] = await db.query(
    "INSERT INTO cat_colores (name, codigoClr) VALUES (?, ?)",
    [name, codigoClr]
  );
  return result;
}

export async function updateColor(id, data) {
  const { name, codigoClr } = data;
  const [result] = await db.query(
    "UPDATE cat_colores SET name = ?, codigoClr = ? WHERE id = ?",
    [name, codigoClr, id]
  );
  return result;
}

export async function getColorById(id) {
  const [rows] = await db.query("SELECT * FROM cat_colores WHERE id = ?", [id]);
  return rows[0];
}

export async function getAllColores() {
  const [rows] = await db.query("SELECT * FROM cat_colores");
  return rows;
}