import express from "express";
import path from "node:path";
import { fileURLToPath } from "url";
import sql from "mssql";
import dotenv from "dotenv";
import routes from "./src/routes/routes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER, 
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, 
        trustServerCertificate: true
    }
};

// Conectando ao SQL Server
sql.connect(dbConfig)
    .then(pool => {
        if (pool.connected) console.log("✅ Conectado ao SQL Server com sucesso!");
    })
    .catch(err => console.error("❌ Erro ao conectar no SQL Server:", err));

// Middlewares
app.use(express.json()); // Importante para receber JSON do React
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});