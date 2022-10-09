import  DataType from "sequelize";
import  sequelize  from "../connection.js";

const Item = sequelize.define(
  "Items",
  {
    idItem: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
    },
    category: {
      type: DataType.STRING,
      allowNull: false,
    },
    size: {
      type: DataType.STRING,
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

export default { Item };
