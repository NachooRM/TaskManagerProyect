const { sequelize } = require("sequelize");

const sequelize = new sequelize({
    dialect: "sqlite",
    storage: "./src/database/database.sqlite",
});

module.exports = sequelize;
