// Importa Express para crear el servidor web
const express = require("express");
// Crea la instancia de la app Express
const app = express();

// Middleware para parsear JSON en las requests (accede a req.body)
app.use(express.json());

// Ruta básica GET para la raíz del servidor
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// Importa la configuración de la base de datos
const sequelize = require("./src/config/database");

// Sincroniza los modelos con la BD (crea tablas si no existen)
sequelize.sync().then(() => {
  console.log("Base de datos conectada");
});

// Importa las rutas de usuarios
const userRoutes = require("./src/routes/userRoutes");
app.use("/users", userRoutes);

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
