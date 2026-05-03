// Importa los tipos de datos de Sequelize
const { DataTypes } = require("sequelize");
// Importa la instancia de la BD desde la configuración
const sequelize = require("../config/database");

// Define el modelo "User" que representa la tabla "Users" en la BD
const User = sequelize.define("User", {
    email: { // Campo email del usuario
        type: DataTypes.STRING, // Tipo de dato string
        allowNull: false, // No permite valores nulos (obligatorio)
    },
});

// Exporta el modelo para usarlo en otros archivos
module.exports = User;