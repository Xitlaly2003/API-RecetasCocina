import app from "../app";
import dotenv from "dotenv";
const db = require('./models/Db.model'); // Conexión a la base de datos

dotenv.config();
app.listen(3000)

console.log('Servidor iniciado en el puerto ', 3000);