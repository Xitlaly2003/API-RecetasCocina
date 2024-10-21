const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

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

module.exports = router;
