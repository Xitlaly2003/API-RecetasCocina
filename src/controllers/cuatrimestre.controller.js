import db from '../models/Db.model';  // Importar la conexión de la base de datos

// Obtener todos los cuatrimestres de un usuario
export const getCuatrimestres = (req, res) => {
    const { id_usuario } = req.params;

    db.getConnection((err, connection) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener conexión', error: err });
        }

        connection.query(`
      SELECT * FROM cuatrimestres
      WHERE id_usuario = ? ORDER BY CAST(SUBSTRING_INDEX(nombre, ' ', 1) AS UNSIGNED);`,
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

        // Consulta para obtener el número más alto de cuatrimestre para el usuario
        connection.query(
            `SELECT COALESCE(MAX(numero), 0) + 1 AS siguienteNumero FROM cuatrimestres WHERE id_usuario = ?`,
            [id_usuario],
            (error, results) => {
                if (error) {
                    connection.release();
                    return res.status(500).json({ message: 'Error al obtener el número del cuatrimestre', error });
                }

                const siguienteNumero = results[0].siguienteNumero; // Número consecutivo del cuatrimestre

                // Inserta el nuevo cuatrimestre con el número calculado
                connection.query(
                    `INSERT INTO cuatrimestres (id_usuario, numero, nombre) VALUES (?, ?, ?)`,
                    [id_usuario, siguienteNumero, nombre],
                    (insertError, result) => {
                        connection.release(); // Liberar conexión después de usarla

                        if (insertError) {
                            return res.status(500).json({ message: 'Error al crear cuatrimestre', error: insertError });
                        }

                        res.status(201).json({ message: 'Cuatrimestre creado exitosamente', id: result.insertId });
                    }
                );
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
            (error, result) => {
                connection.release(); // Liberar conexión después de usarla
                if (error) {
                    return res.status(500).json({ message: 'Error al eliminar el cuatrimestre', error });
                }
                // Verificar si se eliminó alguna fila
                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: 'Cuatrimestre no encontrado o no eliminado' });
                }
                res.json({ message: 'Cuatrimestre eliminado exitosamente' });
            }
        );
    });
};
