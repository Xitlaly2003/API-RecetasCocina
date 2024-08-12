import express from 'express';
import path from 'path';
import studentsRoutes from './src/routes/students.routes';
import professorsRoutes from './src/routes/professors.routes';
import coursesRoutes from './src/routes/courses.routes';
import divisionsRoutes from './src/routes/divisions.routes';
import authRoutes from './src/routes/auth.routes';
import { createDivisions, createRoles } from './src/libs/initialSetup';

const app = express();
const cors = require('cors');
// Middleware para parsear cuerpos de solicitud como JSON
app.use(express.json());

// Middleware para habilitar CORS (si es necesario)
app.use(cors());

// Ejecutar función para crear roles y divisiones
createRoles();
createDivisions();



app.use(express.json());
app.use('/students', studentsRoutes);
app.use('/professors', professorsRoutes);
app.use('/courses', coursesRoutes);
app.use('/divisions', divisionsRoutes);
app.use('/api/auth', authRoutes);

// Ruta para servir la SPA
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API');
});

export default app;
