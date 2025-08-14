import { getLineas, createLinea } from "../models/lineaModel.js";

export async function obtenerLineas(req, res) {
  try {
    const lineas = await getLineas();
    res.json(lineas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener líneas" });
  }
}

export async function crearLinea(req, res) {
  try {
    const result = await createLinea(req.body);
    res.status(201).json({ message: "Línea creada", insertId: result.insertId });
  } catch (error) {
    res.status(500).json({ error: "Error al crear línea" });
  }
}
