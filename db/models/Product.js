const { Model, DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Product", {
        name: {type: DataTypes.STRING},
        price: {type: DataTypes.STRING},
        description: {type: DataTypes.STRING}
    });
}