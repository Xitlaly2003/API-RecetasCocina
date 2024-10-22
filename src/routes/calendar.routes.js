import { Router } from 'express';
import db from '../models/Db.model';  // Importar la conexión de la base de datos (pool)
const router = Router();

// Obtener todos los eventos
router.get('/events', (req, res) => {
  const { id_usuario } = req.query; // Suponiendo que el usuario está autenticado y envía su id
  
  // Usar el pool para obtener una conexión
  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener conexión', error: err });
    }

    connection.query(`
      SELECT e.*, f.fecha 
      FROM eventos e
      LEFT JOIN fechas_evento f ON e.id = f.id_evento
      WHERE (e.id_usuario = ? OR e.e_global = TRUE)`,
      [id_usuario],
      (error, results) => {
        connection.release(); // Liberar conexión después de usarla
        if (error) {
          return res.status(500).json({ message: 'Error al obtener eventos', error });
        }
        res.json(results);
      }
    );
  });
});

// Crear un nuevo evento
router.post('/events', (req, res) => {
  const { id_usuario, titulo, descripcion, fechas, e_global } = req.body; // 'fechas' es un array de fechas

  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener conexión', error: err });
    }

    connection.query(`
      INSERT INTO eventos (id_usuario, titulo, descripcion, e_global)
      VALUES (?, ?, ?, ?)`,
      [id_usuario, titulo, descripcion, e_global],
      (error, result) => {
        if (error) {
          connection.release(); // Liberar conexión en caso de error
          return res.status(500).json({ message: 'Error al crear evento', error });
        }

        const eventId = result.insertId;

        // Insertar fechas
        const fechaValues = fechas.map(fecha => [eventId, fecha]); // Formato adecuado para la inserción
        if (fechaValues.length > 0) {
          connection.query(`
            INSERT INTO fechas_evento (id_evento, fecha)
            VALUES ?`, [fechaValues], (error) => {
              connection.release(); // Liberar conexión después de usarla
              if (error) {
                return res.status(500).json({ message: 'Error al crear fechas del evento', error });
              }
              res.status(201).json({ message: 'Evento creado exitosamente', eventId });
            });
        } else {
          connection.release(); // Liberar conexión si no hay fechas
          res.status(201).json({ message: 'Evento creado exitosamente sin fechas', eventId });
        }
      }
    );
  });
});

// Actualizar un evento
router.put('/events/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, e_global } = req.body;

  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener conexión', error: err });
    }

    connection.query(`
      UPDATE eventos
      SET titulo = ?, descripcion = ?, e_global = ?
      WHERE id = ?`,
      [titulo, descripcion, e_global, id],
      (error) => {
        connection.release(); // Liberar conexión después de usarla
        if (error) {
          return res.status(500).json({ message: 'Error al actualizar evento', error });
        }
        res.json({ message: 'Evento actualizado exitosamente' });
      }
    );
  });
});

// Eliminar un evento
router.delete('/events/:id', (req, res) => {
  const { id } = req.params;

  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener conexión', error: err });
    }

    connection.query(`DELETE FROM eventos WHERE id = ?`, [id], (error) => {
      if (error) {
        connection.release(); // Liberar conexión en caso de error
        return res.status(500).json({ message: 'Error al eliminar evento', error });
      }

      // Eliminar las fechas del evento
      connection.query(`DELETE FROM fechas_evento WHERE id_evento = ?`, [id], (error) => {
        connection.release(); // Liberar conexión después de usarla
        if (error) {
          return res.status(500).json({ message: 'Error al eliminar fechas del evento', error });
        }
        res.json({ message: 'Evento y sus fechas eliminados exitosamente' });
      });
    });
  });
});

export default router;
