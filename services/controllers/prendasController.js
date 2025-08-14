import { getPrendas, createPrenda } from "../models/prendasModel.js";

export async function obtenerPrendas(req, res) {
  try {
    const prendas = await getPrendas();
    res.json(prendas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener prendas" });
  }
}

export async function crearPrenda(req, res) {
  try {
    const result = await createPrenda(req.body);
    res.status(201).json({ message: "Prenda creada", insertId: result.insertId });
  } catch (error) {
    res.status(500).json({ error: "Error al crear prenda" });
  }
}
