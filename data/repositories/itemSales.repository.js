import { Item } from "../models/Item.model.js";
import {ItemSale} from "../models/ItemSale.model.js";

const register = async(value) =>{
    if(!value) return new Error("Values are required")
    const {idItem, idSale, price, amount} = value;
    await ItemSale.create({
        idItem,
        idSale, 
        price, 
        amount
    });
} 

const findAll = async(value) =>{
    if(!value) return new Error("Values are required")
    const {idSale} = value
    const item = await ItemSale.findAll({
        attributes: ["price", "amount"],
        where: {
            idSale
        },
        include: {
            model: Item,
            as: "item",            
            attributes: ["name", "category", "price", "size"]
        }
    });
    return item;
}

//busca por price, id, amount
const findOne = async(search) =>{
    const {price, amount, idItem} = search; 
    const itemSale = await ItemSale.findOne({
        where: {$or:[{
            idItem,
        },
        {
            price
        },
        {
            amount
        }
    ]}
    })
    return itemSale;
}

const deleteOne = async(idItem) =>{
    if(!idItem) return new Error("Values are required")
    return await ItemSale.destroy({where: 
        {
            idItem
        }
    });
}

const update = async(newData) =>{
    if(!newData) return new Error("Values are required")
    const {idItem, amount} = newData;
    return await Item.update({
        amount
    },
    {
        where: {idItem}
    }
    );
}

export {
    register,
    findAll,
    findOne, 
    deleteOne,
    update
}