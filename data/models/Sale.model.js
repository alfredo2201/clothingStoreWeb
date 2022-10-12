import  DataType  from "sequelize";
import  {sequelize}  from "../connection.js";
import { Client } from "./Client.model.js";
import { Card } from "./Card.model.js";

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
      type: DataType.STRING,
      allowNull: false,
    },
    total: {
      type: DataType.FLOAT,
      allowNull: false,
    },
  },
  { timestamps: true }
);

Sale.belongsTo(Client, {
  foreignKey: 'idClient',
  allowNull: false
});
Sale.belongsTo(Card, {
  foreignKey: 'idCard',
  allowNull: false
});

await Sale.sync();

// export default { Sale };
