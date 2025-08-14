import {
  createOrden,
  updateOrden,
  getOrdenById,
  getOrdenesPaginadas,
  getOrdenesCount,
} from "../models/ordenModel.js";

export async function obtenerOrdenes(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const filter = req.query.filter || "";
    const ordenes = await getOrdenesPaginadas(limit, offset, filter);
    res.json(ordenes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener ordenes" });
  }
}

export async function obtenerOrdenesCount(req, res) {
  try {
    const total = await getOrdenesCount();
    res.json({ total });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el total de ordenes" });
  }
}

export async function obtenerOrdenPorId(req, res) {
  try {
    const id = req.params.id;
    const orden = await getOrdenById(id);
    if (orden) {
      res.json(orden);
    } else {
      res.status(404).json({ error: "Orden no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la orden" });
  }
}

export async function crearOrden(req, res) {
  try {
    const data = req.body;
    if (!data.Estilo || !data.Linea || !data.CoOrd || !data.CantEst || !data.FPlanIni || !data.FPlanFin) {
      return res.status(400).json({ error: "Por favor llena todos los campos obligatorios." });
    }
    const result = await createOrden(data);
    res.json({ message: "Orden creada correctamente", orden: result });
  } catch (error) {
    let msg = "Ocurrió un error al crear la orden. Intenta de nuevo.";
    if (error.message && error.message.includes("No se recibieron datos")) {
      msg = "No se recibieron datos para crear la orden.";
    }
    res.status(500).json({ error: msg });
  }
}

export async function modificarOrden(req, res) {
  try {
    const id = req.params.id;
    const result = await updateOrden(id, req.body);
    res.json({
      message: "Orden actualizada",
      affectedRows: result.affectedRows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar orden" });
  }
}
