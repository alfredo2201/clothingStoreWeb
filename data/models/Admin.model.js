import  DataType  from "sequelize";
import  {sequelize}  from "../connection.js";

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
      unique: true,
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

await Admin.sync();

// export default { Manager };
