import { Item } from "../models/Item.model.js";
import {ItemSale} from "../models/ItemSale.model.js";
import { or } from "sequelize";

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

const findAll = async() =>{
    // if(!value) return new Error("Values are required")
    // const {idSale} = value
    const item = await ItemSale.findAll();
    // const item = await ItemSale.findAll({
    //     attributes: ["price", "amount"],
    //     where: {
    //         idSale
    //     },
    //     include: {
    //         model: Item,
    //         as: "item",            
    //         attributes: ["name", "category", "price", "size"]
    //     }
    // });
    return item;
}

//busca por price, id, amount
const findOne = async(search) =>{
    const {price, amount, idItem, idItemSale} = search; 
    const itemSale = await ItemSale.findOne({idItemSale});
    // const itemSale = await ItemSale.findOne({
    //     where: {$or:[{
    //         idItem,
    //     },
    //     {
    //         price
    //     },
    //     {
    //         amount
    //     }
    // ]}
    // })
    // const ite = await ItemSale.findOne({where:{
    //     or({idItem}, {amount})
    // }})
    return itemSale;
}

const deleteOne = async(data) =>{
    const {idItemSale} = data;
    // if(!idItemSle) return new Error("Values are required")
    return await ItemSale.destroy({where: 
        {
            idItemSale
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