import DataType from "sequelize";
import { sequelize } from "../connection.js";
import { Card } from "./Card.model.js";

export const Client = sequelize.define(
  "Client",
  {
    idClient: {
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
    address: {
      type: DataType.STRING(100),
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
  {
    tableName: "clients",
    timestamps: true,
  }
);
