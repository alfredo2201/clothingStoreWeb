import { Card } from "./Card.model.js";
import { Client } from "./Client.model.js";
import { Item } from "./Item.model.js";
import { ItemSale } from "./ItemSale.model.js";
import { Sale } from "./Sale.model.js";
import { Admin } from "./Admin.model.js";

export const executeAssociations = async () => {
  //Relacion de muchos a muchos entre Sales e Items
  Sale.belongsToMany(Item, {foreignKey: "idSale", through: 'ItemSale' });
  Item.belongsToMany(Sale, {foreignKey: "idItem", through: 'ItemSale' });
  //Relacion con Clients y Cards
  Client.hasMany(Card, { foreignKey: "idClient", allowNull: false, onDelete: 'CASCADE'});
  Card.belongsTo(Client, { foreignKey: "idClient", allowNull: false});
  //Relacion entre Clients y Sales
  Client.hasMany(Sale, { foreignKey: "idClient", allowNull: false});
  Sale.belongsTo(Client, { foreignKey: "idClient", allowNull: false});
  //Relacion entre Cards y Sales
  // Card.hasMany(Sale, { foreignKey: "idCard", allowNull: false, onDelete: 'CASCADE'});
  // Sale.belongsTo(Card, { foreignKey: "idCard", allowNull: false });

  await Client.sync();
  // await Client.sync({alter: true});
  await Admin.sync();
  await Card.sync();
  await Sale.sync();
  await Item.sync();
  await Item.sync();
  await ItemSale.sync();
};

