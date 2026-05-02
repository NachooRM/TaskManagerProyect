const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const sequelize = require("./src/config/database");
const User = require("./src/models/User");

sequelize.sync().then(() => {
  console.log("Base de datos conectada");
});

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});