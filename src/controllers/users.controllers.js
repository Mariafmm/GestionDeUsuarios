import { pool } from "../bd.js";

// Obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM usuarios");
    res.status(200).json({
      message: "Usuarios obtenidos correctamente",
      data: rows
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener usuario por ID
export const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const { rows } = await pool.query("SELECT * FROM usuarios WHERE id = $1", [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({
      message: `Usuario con ID ${id} obtenido correctamente`,
      data: rows[0]
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear usuario
export const createUser = async (req, res) => {
  try {
    const { nombre, email, edad } = req.body;

    const { rows } = await pool.query(
      "INSERT INTO usuarios (nombre, email, edad) VALUES ($1, $2, $3) RETURNING *",
      [nombre, email, edad]
    );

    res.status(201).json({
      message: "Usuario creado exitosamente",
      data: rows[0]
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar usuario
export const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, email } = req.body;

  try {
    const { rows } = await pool.query(
      "UPDATE usuarios SET nombre = $1, email = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *",
      [nombre, email, id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado para actualizar" });
    }

    res.status(200).json({
      message: `Usuario con ID ${id} actualizado correctamente`,
      data: rows[0]
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar usuario
export const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const { rowCount } = await pool.query("DELETE FROM usuarios WHERE id = $1", [id]);

    if (rowCount === 0) {
      return res.status(404).json({ message: "Usuario no encontrado para eliminar" });
    }

    res.status(200).json({ message: `Usuario con ID ${id} eliminado exitosamente` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
