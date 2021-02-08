// const { Model, DataTypes } = require("sequelize");
// const { sequelize, Sequelize } = require(".");
const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        name: {type: DataTypes.STRING, allowNull: false,},
        slug: {type: DataTypes.STRING, unique: true},
        price: {type: DataTypes.INTEGER, defaultValue: 3, validate: { min: 2 }, allowNull: false,},
        description: {type: DataTypes.STRING},
        image: {type: DataTypes.STRING, allowNull: true},
    });

    SequelizeSlugify.slugifyModel(Product, {
        source: ["name"]
      });

    return Product;
}