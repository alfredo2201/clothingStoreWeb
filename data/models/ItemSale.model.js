import  DataType  from "sequelize";
import  {sequelize}  from "../connection.js";

export const ItemSale = sequelize.define(
  "ItemSale",
  {
    idItemSale: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataType.FLOAT,
      allowNull: false,
    },
    amount: {
        type: DataType.INTEGER,
        allowNull: false,
      },
  },
  { timestamps: true }
);


