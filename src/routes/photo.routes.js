const express = require('express');
const router = express.Router();
const { savePhoto, getAllPhotos } = require('../controllers/photoController');

// Ruta para guardar una foto
router.post('/photos', savePhoto);

// Ruta para obtener todas las fotos
router.get('/photos', getAllPhotos);

module.exports = router;
