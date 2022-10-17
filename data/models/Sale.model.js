import  DataType  from "sequelize";
import  {sequelize}  from "../connection.js";

export const Sale = sequelize.define(
  "Sale",
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
  },
  { timestamps: true }
);

