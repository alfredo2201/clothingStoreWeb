import  DataType  from "sequelize";
import  sequelize  from "../connection.js";

const ItemSale = sequelize.define(
  "ItemSales",
  {
    idItemSale: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
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

ItemSale.idItem = ItemSale.belongsTo(Item.idItem);
ItemSales.idSale = ItemSales.belongsTo(Sale.idSale);

export default { ItemSale };
