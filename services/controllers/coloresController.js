import {
  getColoresPaginados,
  getColoresCount,
  createColor,
  updateColor,
  getColorById,
  getAllColores
} from "../models/coloresModel.js";

export async function obtenerColores(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const colores = await getColoresPaginados(limit, offset);
    res.json(colores);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener colores" });
  }
}

export async function obtenerColoresCount(req, res) {
  try {
    const total = await getColoresCount();
    res.json({ total });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el total de colores" });
  }
}

export async function crearColor(req, res) {
  try {
    const result = await createColor(req.body);
    res.status(201).json({ message: "Color creado", insertId: result.insertId });
  } catch (error) {
    res.status(500).json({ error: "Error al crear color" });
  }
}

export async function modificarColor(req, res) {
  try {
    const id = req.params.id;
    const result = await updateColor(id, req.body);
    res.json({ message: "Color actualizado", affectedRows: result.affectedRows });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar color" });
  }
}

export async function obtenerColorPorId(req, res) {
  try {
    const id = req.params.id;
    const color = await getColorById(id);
    if (color) {
      res.json(color);
    } else {
      res.status(404).json({ error: "Color no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener color" });
  }
}

export async function obtenerTodosColores(req, res) {
  try {
    const colores = await getAllColores();
    res.json(colores);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener todos los colores" });
  }
}