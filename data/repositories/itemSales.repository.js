import {ItemSale} from "../models/ItemSale.model.js";

const register = async(itemSale) =>{
    if(!itemSale){
        res.send({message: 'error itemSale'})
    }
    const {idItem, idSale, price, amount} = itemSale;
    await ItemSale.create({
        idItem,
        idSale, 
        price, 
        amount
    });
} 

const findAll = async() =>{
    const item = await ItemSale.findAll();
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
    return await ItemSale.destroy({where: 
        {
            idItem
        }
    });
}

const update = async(newData) =>{
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