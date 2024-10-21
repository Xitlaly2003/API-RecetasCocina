const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/auth.routes'); // Rutas de autenticación
const calendarRoutes = require('./src/routes/calendar.routes');

const app = express();
const cors = require('cors');

// Middleware para parsear cuerpos de solicitud como JSON
app.use(bodyParser.json());

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
