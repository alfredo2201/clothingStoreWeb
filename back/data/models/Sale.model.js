import  DataType  from "sequelize";
import  {sequelize}  from "../connection.js";

export const Sale = sequelize.define(
  "sales",
  {
    idSale: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    paymentMethod: {
      type: DataType.STRING(30),
      allowNull: false,
    },
    total: {
      type: DataType.FLOAT,
      allowNull: false,
    },
    brand: {
      type: DataType.STRING,
      allowNull: false
    },
    card:{
      type: DataType.STRING(4),
      allowNull: false
    }
  },
  { timestamps: true }
);

