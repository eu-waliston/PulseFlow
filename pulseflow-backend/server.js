import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";

dotenv.config();
connectDB();

app.listen(process.env.PORT || 5000, () => {
    console.log("Servidor rodando na porta 5000 🚀");
})