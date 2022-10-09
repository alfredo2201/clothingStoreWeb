import { DataType } from "sequelize";
import { sequelize } from "../connection.js";

const Sale = sequelize.define(
  "Sales",
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

Sale.idClient = Sale.belongsTo(Client.idClient);
Sale.idCard = Sale.belongsTo(Card.idCard);

export default { Sale };
