import DataType from "sequelize";
import { sequelize } from "../connection.js";
import { Client } from "./Client.model.js";

export const Card = sequelize.define(
  "Card",
  {
    idCard: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    nameOwner: {
      type: DataType.STRING(80),
      allowNull: false,
    },
    cardNumber: {
      type: DataType.STRING(16),
      allowNull: false,
    },
    expirationDate: {
      type: DataType.STRING(5),
      allowNull: false,
    },
  },
  { timestamps: true }
);
