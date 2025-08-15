export async function updateTela(id, data) {
  const { CantTela, FPedTela, observations, status, stage } = data;
  const [result] = await db.query(
    `UPDATE Tela SET CantTela = ?, FPedTela = ?, observations = ?, status = ?, stage = ? WHERE id = ?`,
    [CantTela, FPedTela, observations, status, stage, id]
  );
  return result;
}
import db from "../connection.js";

export async function getOrdenesTela() {
  const [rows] = await db.query(
    `SELECT t.status, o.NumOrd, o.Estilo, t.name
     FROM ordenes o
     JOIN Tela t ON o.NumOrd = t.id
     WHERE t.status <> 'Finalizado'`
  );
  return rows;
}

export async function getDetalleTela(id) {
  const [rows] = await db.query(
    `SELECT t.CantTela, t.FPedTela, t.observations, t.status, t.stage, t.create_time,
            o.NumOrd, o.Estilo, o.EstiloCrt
     FROM Tela t
     JOIN ordenes o ON t.id = o.NumOrd
     WHERE t.id = ?`,
    [id]
  );
  return rows[0] || null;
}
