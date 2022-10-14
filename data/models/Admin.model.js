import DataType from "sequelize";
import { sequelize } from "../connection.js";

export const Admin = sequelize.define(
  "Admin",
  {
    idAdmin: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    userName: {
      type: DataType.STRING(50),
      allowNull: false,

    },
    name: {
      type: DataType.STRING(30),
      allowNull: false,

    },
    lastName: {
      type: DataType.STRING(30),
      allowNull: false,

    },
    email: {
      type: DataType.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataType.STRING(150),
      allowNull: false,
    },
  },
  { timestamps: true }
);
