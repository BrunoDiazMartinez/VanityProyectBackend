import express from "express";
import {
  obtenerOrdenes,
  obtenerOrdenesCount,
  crearOrden,
  modificarOrden,
  obtenerOrdenPorId,
} from "../controllers/ordenController.js";

const router = express.Router();

router.get("/ordenes", obtenerOrdenes);
router.get("/ordenes/count", obtenerOrdenesCount);
router.get("/ordenes/:id", obtenerOrdenPorId);
router.post("/ordenes", crearOrden);
router.put("/ordenes/:id", modificarOrden);

export default router;
