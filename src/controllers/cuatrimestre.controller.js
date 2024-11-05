import db from '../models/Db.model';  // Importar la conexión de la base de datos

// Obtener todos los cuatrimestres de un usuario
export const getCuatrimestres = (req, res) => {
  const { id_usuario } = req.query;

  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener conexión', error: err });
    }

    connection.query(`
      SELECT * FROM cuatrimestres
      WHERE id_usuario = ? ORDER BY nombre`,
      [id_usuario],
      (error, results) => {
        connection.release(); // Liberar conexión después de usarla
        if (error) {
          return res.status(500).json({ message: 'Error al obtener cuatrimestres', error });
        }
        res.json(results);
      }
    );
  });
};

// Crear un nuevo cuatrimestre para un usuario
export const createCuatrimestre = (req, res) => {
  const { id_usuario, nombre } = req.body;

  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener conexión', error: err });
    }

    connection.query(`
      INSERT INTO cuatrimestres (id_usuario, nombre)
      VALUES (?, ?)`,
      [id_usuario, nombre],
      (error, result) => {
        connection.release(); // Liberar conexión después de usarla
        if (error) {
          return res.status(500).json({ message: 'Error al crear cuatrimestre', error });
        }
        res.status(201).json({ message: 'Cuatrimestre creado exitosamente', id: result.insertId });
      }
    );
  });
};

// Obtener un cuatrimestre específico de un usuario
export const getCuatrimestre = (req, res) => {
  const { id_usuario, cuatrimestre_id } = req.params;

  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener conexión', error: err });
    }

    connection.query(`
      SELECT * FROM cuatrimestres
      WHERE id = ? AND id_usuario = ?`,
      [cuatrimestre_id, id_usuario],
      (error, result) => {
        connection.release(); // Liberar conexión después de usarla
        if (error) {
          return res.status(500).json({ message: 'Error al obtener el cuatrimestre', error });
        }
        res.json(result[0]);
      }
    );
  });
};

// Eliminar un cuatrimestre específico de un usuario
export const deleteCuatrimestre = (req, res) => {
  const { cuatrimestre_id, id_usuario } = req.params;

  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener conexión', error: err });
    }

    connection.query(`
      DELETE FROM cuatrimestres
      WHERE id = ? AND id_usuario = ?`,
      [cuatrimestre_id, id_usuario],
      (error) => {
        connection.release(); // Liberar conexión después de usarla
        if (error) {
          return res.status(500).json({ message: 'Error al eliminar el cuatrimestre', error });
        }
        res.json({ message: 'Cuatrimestre eliminado exitosamente' });
      }
    );
  });
};
