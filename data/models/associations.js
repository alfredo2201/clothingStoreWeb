import { Card } from "./Card.model.js";
import { Client } from "./Client.model.js"
import { Item } from "./Item.model.js";
import { ItemSale } from "./ItemSale.model.js";
import { Sale } from "./Sale.model.js";
import { Admin } from "./Admin.model.js"

export const executeAssociations = async () => {
    //Relacion con Clients y Cards
    Client.hasMany(Card)
    Card.belongsTo(Client, {
        foreignKey: 'idClient',
        allowNull: false
    });
    //Relacion entre Clients y Sales
    Client.hasMany(Sale)
    Sale.belongsTo(Client, {
        foreignKey: 'idClient',
        allowNull: false
    })
    //Relacion entre Cards y Sales 
    Card.hasMany(Sale)
    Sale.belongsTo(Card,{
        foreignKey: 'idCard',
        allowNull: false
    })

    //Relacion de muchos a muchos entre Sales e Items
    Sale.belongsToMany(Item, { through: ItemSale })
    Item.belongsToMany(Sale, { through: ItemSale })
    await Client.sync()
    await Admin.sync()
    await Item.sync()
    await Sale.sync()
    await Card.sync()
    await ItemSale.sync()
}

