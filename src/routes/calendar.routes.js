import { Router } from 'express';
import db from '../models/Db.model';  // Importar la conexión de la base de datos (pool)
const router = Router();

// Obtener eventos del mes actual
router.get('/events/month', (req, res) => {
  const { id_usuario } = req.query;  // Suponiendo que el usuario está autenticado y envía su id
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  
  // Usar el pool para obtener una conexión
  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener conexión', error: err });
    }

    connection.query(`
      SELECT * FROM eventos_calendario
      WHERE MONTH(fecha_inicio) = ? 
      AND YEAR(fecha_inicio) = ? 
      AND id_usuario = ?`, 
      [month, year, id_usuario],
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
  const { id_usuario, titulo, descripcion, fecha_inicio, fecha_fin, tipo } = req.body;

  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener conexión', error: err });
    }

    connection.query(`
      INSERT INTO eventos_calendario (id_usuario, titulo, descripcion, fecha_inicio, fecha_fin, tipo)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [id_usuario, titulo, descripcion, fecha_inicio, fecha_fin, tipo],
      (error, result) => {
        if (error) {
          connection.release(); // Liberar conexión en caso de error
          return res.status(500).json({ message: 'Error al crear evento', error });
        }

        // Insertar una notificación
        connection.query(`
          INSERT INTO notificaciones (id_usuario, titulo, mensaje, tipo)
          VALUES (?, ?, ?, 'evento')`,
          [id_usuario, `Nuevo evento: ${titulo}`, `Tienes un nuevo evento llamado "${titulo}" el ${fecha_inicio}`],
          (error) => {
            connection.release(); // Liberar conexión después de usarla
            if (error) {
              return res.status(500).json({ message: 'Error al crear notificación', error });
            }
            res.status(201).json({ message: 'Evento creado exitosamente', eventId: result.insertId });
          }
        );
      }
    );
  });
});

// Actualizar un evento
router.put('/events/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, fecha_inicio, fecha_fin, tipo } = req.body;

  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener conexión', error: err });
    }

    connection.query(`
      UPDATE eventos_calendario
      SET titulo = ?, descripcion = ?, fecha_inicio = ?, fecha_fin = ?, tipo = ?
      WHERE id = ?`,
      [titulo, descripcion, fecha_inicio, fecha_fin, tipo, id],
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

    connection.query(`DELETE FROM eventos_calendario WHERE id = ?`, [id], (error) => {
      connection.release(); // Liberar conexión después de usarla
      if (error) {
        return res.status(500).json({ message: 'Error al eliminar evento', error });
      }
      res.json({ message: 'Evento eliminado exitosamente' });
    });
  });
});

export default router;
