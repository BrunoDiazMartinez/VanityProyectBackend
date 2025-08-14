import express from "express";
import db from "./services/connection.js";
import ordenRoutes from "./services/routes/ordenRoutes.js";
import tallasRoutes from "./services/routes/tallasRoutes.js";
import coloresRoutes from "./services/routes/coloresRoutes.js";
import prendasRoutes from "./services/routes/prendasRoutes.js";
import lineaRoutes from "./services/routes/lineaRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", ordenRoutes);
app.use("/api", tallasRoutes);
app.use("/api", coloresRoutes);
app.use("/api", prendasRoutes);
app.use("/api", lineaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
