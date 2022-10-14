import  DataType  from "sequelize";
import  {sequelize}  from "../connection.js";
import { Item } from "./Item.model.js";
import { Sale } from "./Sale.model.js";

export const ItemSale = sequelize.define(
  "ItemSale",
  {
    idItemSale: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    // idSale:{
    //   type: DataType.INTEGER,
    //   allowNull: false,
    //   references:{
    //     model: Sale,
    //     key:'idSale'
    //   }
    // },
    // idItem:{
    //   type: DataType.INTEGER,
    //   allowNull: false,
    //   references:{
    //     model: Item,
    //     key:'idItem'
    //   }
    // },
    price: {
      type: DataType.FLOAT,
      allowNull: false,
    },
    amount: {
        type: DataType.INTEGER,
        allowNull: false,
      },
  },
  { timestamps: true }
);


