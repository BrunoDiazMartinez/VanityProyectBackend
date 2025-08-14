import db from "../connection.js";

export async function getLineas() {
  const [rows] = await db.query("SELECT * FROM cat_linea");
  return rows;
}

export async function createLinea(data) {
  if (!data) throw new Error("No se recibieron datos para crear la línea");
  const { name, codigoLinea } = data;
  const [result] = await db.query(
    "INSERT INTO cat_linea (name, codigoLinea) VALUES (?, ?)",
    [name, codigoLinea]
  );
  return result;
}
