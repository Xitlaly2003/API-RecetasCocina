import express from 'express';
import authRoutes from './src/routes/auth.routes';
import calendarRoutes from './src/routes/calendar.routes';

const app = express();
const cors = require('cors');

// Middleware para parsear cuerpos de solicitud como JSON
app.use(express.json());

// Middleware para habilitar CORS (si es necesario)
app.use(cors());

app.use(express.json());
app.use('/api', authRoutes);
app.use('/api/calendar', calendarRoutes);

// Ruta para servir la SPA
app.get('/', (req, res) => {
    res.send('MobUTEQ API');
});

export default app;
