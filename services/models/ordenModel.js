import db from "../connection.js";

export async function getOrdenesPaginadas(limit, offset) {
  let baseQuery = "SELECT * FROM ordenes";
  let params = [];
  if (arguments.length > 2 && arguments[2]) {
    const filter = arguments[2];
    baseQuery += " WHERE Estilo LIKE ? OR NumOrd LIKE ?";
    params.push(`${filter}`, `${filter}`);
  }
  baseQuery += " LIMIT ? OFFSET ?";
  params.push(limit, offset);
  const [rows] = await db.query(baseQuery, params);
  return rows;
}

export async function getOrdenesCount() {
  const [rows] = await db.query('SELECT COUNT(*) as total FROM ordenes');
  return rows[0].total;
}

export async function createOrden(data) {
  if (!data) throw new Error("No se recibieron datos para crear la orden");
  const {
    Estilo,
    Linea,
    Prenda,
    PrenClr,
    PrenTalla,
    CoOrd,
    CantEst,
    FPlanIni,
    FPlanFin,
    ReEst = "E",
    OrdDesc
  } = data;

  const [rows] = await db.query(
    "SELECT COUNT(*) as count FROM ordenes WHERE Estilo = ?",
    [Estilo]
  );
  const estiloCrt = rows[0].count + 1;

  const [result] = await db.query(
    `INSERT INTO ordenes (Estilo, EstiloCrt, Linea, Prenda, PrenClr, PrenTalla, CoOrd, CantEst, FPlanIni, FPlanFin, ReEst, OrdDesc)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [Estilo, estiloCrt, Linea, Prenda, PrenClr, PrenTalla, CoOrd, CantEst, FPlanIni, FPlanFin, ReEst, OrdDesc]
  );
  const NumOrd = result.insertId;
  await db.query(
    `INSERT INTO Tela (id, name) VALUES (?, ?)`,
    [NumOrd, Prenda]
  );
  return result;
}

export async function updateOrden(id, data) {
  const { CantEst, CantReal, Estilo, Linea, CoOrd } = data;
  const [result] = await db.query(
    `UPDATE ordenes SET CantEst = ?, CantReal = ?, Estilo = ?, Linea = ?, CoOrd = ? WHERE NumOrd = ?`,
    [CantEst, CantReal, Estilo, Linea, CoOrd, id]
  );
  return result;
}

export async function getOrdenById(id) {
  const [rows] = await db.query("SELECT * FROM ordenes WHERE NumOrd = ?", [id]);
  return rows[0];
}
