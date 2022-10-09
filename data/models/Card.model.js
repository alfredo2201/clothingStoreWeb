import  DataType  from "sequelize";
import  {sequelize}  from "../connection.js";
import { Client } from "./Client.model.js";

export const Card = sequelize.define(
  "Cards",
  {
    idCard: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    nameOwner: {
      type: DataType.STRING,
      allowNull: false,
    },
    cardNumber: {
      type: DataType.STRING,
      allowNull: false,
    },
    expirationDate: {
      type: DataType.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

Card.belongsTo(Client, {
  foreignKey:'idClient',  
});

await Card.sync();


// Card.idClient = Card.belongsTo(Client.idClient);
// export default { Card };
