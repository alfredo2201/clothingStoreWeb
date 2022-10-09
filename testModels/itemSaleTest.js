import { ItemSale } from "../data/models/ItemSale.model.js";
import { Sale } from "../data/models/Sale.model.js";
import { Item } from "../data/models/Item.model.js";

export const ejecuteItemSaleTest = async () => {
    console.log('Se crea un Item Sale');
    const itemsale = await createItemSale();
    // console.log(itemsale.dataValues);
};

const createItemSale = async() => {
    const sale = await Sale.findOne({ where: { idSale: 1 } });
    const item = await Item.findOne({ where: { idItem: 2 } });
    // console.log(sale.dataValues);
    // console.log(item.dataValues);
    const itemSale = ItemSale.create({
        price: item.price,
        amount: 1,
        idItem:  item.idItem,
        idSale: sale.idSale,
    });
    return itemSale;
};

