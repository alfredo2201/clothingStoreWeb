import DataType from "sequelize";
import { sequelize } from "../connection.js";
import bcrypt from 'bcrypt';

export const Card = sequelize.define(
  "cards",
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
      type: DataType.STRING(250),
      allowNull: false,
    },
    lastCardNumbers:{
      type:DataType.STRING(4),
      allowNull: false,
    },
    expirationDate: {
      type: DataType.STRING(150),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    hooks: {
      beforeCreate: async (card) => {
        const salt = await bcrypt.genSalt(10);
        console.log('pasó el salt');
        card.expirationDate = await bcrypt.hash(card.expirationDate, salt);
        card.cardNumber = await bcrypt.hash(card.cardNumber, salt);
      }
    }
  }
);

Card.prototype.verifyCardNumber = function(card){
  return bcrypt.compareSync(card, this.cardNumber);
}

Card.prototype.verifyExpirationDate = function(exDate){
  return bcrypt.compareSync(exDate, this.expirationDate);
}