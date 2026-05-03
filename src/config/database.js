// Importa el constructor Sequelize desde el paquete sequelize
const { Sequelize } = require("sequelize");

// Crea una instancia de Sequelize configurada para SQLite
const sequelize = new Sequelize({
    dialect: "sqlite", // Especifica el dialecto de la BD (SQLite)
    storage: "./src/database/database.sqlite", // Ruta al archivo de la BD
});

// Exporta la instancia para usarla en otros archivos
module.exports = sequelize;
