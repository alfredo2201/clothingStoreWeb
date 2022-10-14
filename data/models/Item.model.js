import  DataType from "sequelize";
import  {sequelize}  from "../connection.js";

export const Item = sequelize.define(
  "Item",
  {
    idItem: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataType.STRING(60),
      allowNull: false      
    },
    category: {
      type: DataType.STRING(30),
      allowNull: false,
    },
    size: {
      type: DataType.STRING(3),
      allowNull: false,
    },
    price: {
      type: DataType.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataType.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);
