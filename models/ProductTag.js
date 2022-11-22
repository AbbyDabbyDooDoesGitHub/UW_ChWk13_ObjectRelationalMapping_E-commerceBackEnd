const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// bring in Product for reference id
const Product = require("./Product");
// bring in Tag for reference id
const Tag = require("./Tag");

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      // Integer
      type: DataTypes.INTEGER,
      // Doesn't allow null values.
      allowNull: false,
      // Set as primary key.
      primaryKey: true,
      // Uses auto increment.
      autoIncrement: true
    },

    product_id: {
      // Integer.
      type: DataTypes.INTEGER,
      //! References the Product model's id.
      references: {

      }
    },

    tag_id: {
      // Integer.
      type: DataTypes.INTEGER,
      //! References the Tag model's id.
      references: {

      }
    }

  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
