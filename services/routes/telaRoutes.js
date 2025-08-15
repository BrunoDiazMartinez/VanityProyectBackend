import express from "express";
import { obtenerOrdenesTela, obtenerDetalleTela, modificarTela } from "../controllers/telaController.js";

const router = express.Router();

router.get("/tela", obtenerOrdenesTela);
router.get("/tela/:id", obtenerDetalleTela);
router.put("/tela/:id", modificarTela);

export default router;
