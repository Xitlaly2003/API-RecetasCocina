// calendar.routes.js
import { Router } from 'express';
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
} from '../controllers/calendar.controller'; // Importar las funciones del controlador

const router = Router();

// Obtener todos los eventos
router.get('/events', getEvents);

// Crear un nuevo evento
router.post('/events', createEvent);

// Actualizar un evento
router.put('/events/:id', updateEvent);

// Eliminar un evento
router.delete('/events/:id', deleteEvent);

export default router;
