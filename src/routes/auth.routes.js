import { Router } from 'express';
const authController = require('../controllers/auth.controller');
const router = Router();

// Ruta para registrar un usuario
router.post('/register', authController.register);

// Ruta para iniciar sesión
router.post('/login', authController.login);

// Ruta para verificar el correo
router.get('/verify/:confirmationCode', authController.verify);

// Ruta para servir la SPA
app.get('/', (req, res) => {
    res.send('auth');
});

export default router;
