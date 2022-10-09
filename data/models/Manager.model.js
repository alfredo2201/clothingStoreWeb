import { DataType } from "sequelize";
import { sequelize } from "../connection.js";

const Manager = sequelize.define(
  "Managers",
  {
    idClient: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    userName: {
      type: DataType.STRING,
      allowNull: false,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataType.STRING,
      allowNull: false,
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

export default { Manager };
