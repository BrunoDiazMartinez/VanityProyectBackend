import {
  getTallasPaginadas,
  getTallasCount,
  createTalla,
  updateTalla,
  getTallaById,
  getAllTallas
} from "../models/tallasModel.js";

export async function obtenerTallas(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const tallas = await getTallasPaginadas(limit, offset);
    res.json(tallas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener tallas" });
  }
}

export async function obtenerTallasCount(req, res) {
  try {
    const total = await getTallasCount();
    res.json({ total });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el total de tallas" });
  }
}

export async function crearTalla(req, res) {
  try {
    const result = await createTalla(req.body);
    res.status(201).json({ message: "Talla creada", insertId: result.insertId });
  } catch (error) {
    res.status(500).json({ error: "Error al crear talla" });
  }
}

export async function modificarTalla(req, res) {
  try {
    const id = req.params.id;
    const result = await updateTalla(id, req.body);
    res.json({ message: "Talla actualizada", affectedRows: result.affectedRows });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar talla" });
  }
}

export async function obtenerTallaPorId(req, res) {
  try {
    const id = req.params.id;
    const talla = await getTallaById(id);
    if (talla) {
      res.json(talla);
    } else {
      res.status(404).json({ error: "Talla no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener talla" });
  }
}

export async function obtenerTodasTallas(req, res) {
  try {
    const tallas = await getAllTallas();
    res.json(tallas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener todas las tallas" });
  }
}