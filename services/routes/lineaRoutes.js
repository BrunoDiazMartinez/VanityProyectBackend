import express from "express";
import { obtenerLineas, crearLinea } from "../controllers/lineaController.js";
const router = express.Router();

router.get("/linea", obtenerLineas);
router.post("/linea", crearLinea);

export default router;
