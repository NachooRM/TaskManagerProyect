// Importa Express
const express = require("express");
// Crea un router
const router = express.Router();

// Importa el controlador de usuarios
const { getAllUsers, createUser } = require("../controllers/userController");

// Define las rutas
router.get("/", getAllUsers); // GET /users
router.post("/", createUser); // POST /users

// Exporta el router
module.exports = router;