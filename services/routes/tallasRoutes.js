import express from "express";
import {
  obtenerTallas,
  obtenerTallasCount,
  crearTalla,
  modificarTalla,
  obtenerTallaPorId,
  obtenerTodasTallas
} from "../controllers/tallasController.js";

const router = express.Router();

router.get("/tallas", obtenerTallas);
router.get("/tallas/all", obtenerTodasTallas);
router.get("/tallas/count", obtenerTallasCount);
router.post("/tallas", crearTalla);
router.put("/tallas/:id", modificarTalla);
router.get("/tallas/:id", obtenerTallaPorId);

export default router;