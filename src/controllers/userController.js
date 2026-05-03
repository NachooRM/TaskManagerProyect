// Importa el modelo User
const User = require("../models/User");

// Controlador para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll(); // Consulta todos los usuarios en la BD
    res.json(users); // Responde con los usuarios en formato JSON
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

// Controlador para crear un usuario
const createUser = async (req, res) => {
  try {
    console.log(req.body); // Imprime el body de la request para debug
    // Aquí puedes agregar lógica para crear el usuario en la BD
    // Por ejemplo: const newUser = await User.create(req.body);
    res.send("Usuario recibido exitosamente"); // Respuesta básica
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

module.exports = {
  getAllUsers,
  createUser,
};