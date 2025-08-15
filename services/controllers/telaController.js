import { getOrdenesTela, getDetalleTela, updateTela } from "../models/telaModel.js";
export const modificarTela = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await updateTela(id, data);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "No se encontró la tela para modificar" });
    }
    res.json({ message: "Tela modificada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al modificar la tela" });
  }
};

export async function obtenerOrdenesTela(req, res) {
  try {
    const ordenes = await getOrdenesTela();
    res.json(ordenes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener ordenes en etapa Tela" });
  }
}
export const obtenerDetalleTela = async (req, res) => {
  try {
    const { id } = req.params;
    const detalle = await getDetalleTela(id);
    if (!detalle) {
      return res.status(404).json({ error: "No se encontró la orden de tela" });
    }
    res.json(detalle);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el detalle de tela" });
  }
};
