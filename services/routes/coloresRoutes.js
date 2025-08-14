import express from "express";
import {
  obtenerColores,
  obtenerColoresCount,
  crearColor,
  modificarColor,
  obtenerColorPorId,
  obtenerTodosColores,
} from "../controllers/coloresController.js";

const router = express.Router();

router.get("/colores", obtenerColores);
router.get("/colores/all", obtenerTodosColores);
router.get("/colores/count", obtenerColoresCount);
router.post("/colores", crearColor);
router.put("/colores/:id", modificarColor);
router.get("/colores/:id", obtenerColorPorId);

export default router;
