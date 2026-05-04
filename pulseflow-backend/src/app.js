import express from "express";
import cors from "cors";
import patientRoutes from "./routes/patientRoutes.js";
import helmet from "helmet"

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger.js";


const app = express()

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("api/patient", patientRoutes)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;