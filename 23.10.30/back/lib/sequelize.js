// env constants
require("dotenv").config();
const { DB_DATABASE, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DIALECT } =
    process.env;
// DB object
const DB = {
    database: DB_DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    dialect: DB_DIALECT,
};

const Sequelize = require("sequelize");
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB);
require("./table")(sequelize, Sequelize.DataTypes);
require("./table2")(sequelize, Sequelize.DataTypes);
const { Upload, UserData } = sequelize.models;

module.exports = {
    sequelize,
    Upload,
    UserData,
};
