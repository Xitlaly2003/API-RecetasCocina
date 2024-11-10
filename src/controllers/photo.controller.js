const Photo = require('../models/photo');

// Guardar una foto
const savePhoto = async (req, res) => {
  const { photo } = req.body; // Foto en base64 desde el frontend

  try {
    const newPhoto = new Photo({ image: photo });
    await newPhoto.save();
    res.status(201).json({ message: 'Foto guardada exitosamente', data: newPhoto });
  } catch (error) {
    console.error('Error al guardar la foto:', error);
    res.status(500).json({ message: 'Error al guardar la foto' });
  }
};

// Obtener todas las fotos
const getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).json(photos);
  } catch (error) {
    console.error('Error al obtener las fotos:', error);
    res.status(500).json({ message: 'Error al obtener las fotos' });
  }
};

module.exports = {
  savePhoto,
  getAllPhotos,
};
