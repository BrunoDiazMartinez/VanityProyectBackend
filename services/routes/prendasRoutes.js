import express from "express";
import { obtenerPrendas, crearPrenda } from "../controllers/prendasController.js";
const router = express.Router();

router.get("/prendas", obtenerPrendas);
router.post("/prendas", crearPrenda);

export default router;
