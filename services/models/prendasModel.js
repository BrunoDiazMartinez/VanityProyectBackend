import db from "../connection.js";

export async function getPrendas() {
  const [rows] = await db.query("SELECT * FROM cat_prendas");
  return rows;
}

export async function createPrenda(data) {
  if (!data) throw new Error("No se recibieron datos para crear la prenda");
  const { name, codigoPrenda } = data;
  const [result] = await db.query(
    "INSERT INTO cat_prendas (name, codigoPrenda) VALUES (?, ?)",
    [name, codigoPrenda]
  );
  return result;
}
