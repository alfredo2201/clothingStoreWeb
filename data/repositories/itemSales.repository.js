import {ItemSale} from "../models/ItemSale.model";

const register = async(itemSale) =>{
    if(!itemSale){
        res.send({message: 'error itemSale'})
    }
    const {idItem, idSale, price, stock} = itemSale;
    await ItemSale.create({
        idItem,
        idSale, 
        price, 
        stock
    });
} 

const findAll = async() =>{
    const item = await ItemSale.findAll();
    return itemSales;
}

//busca por price, id, stock
const findOne = async(search) =>{
    const {price, stock, idItem} = search; 
    const itemSale = await ItemSale.findOne({
        where: {$or:[{
            idItem,
        },
        {
            price
        },
        {
            stock
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
    const {idItem, stock} = newData;

    return await Item.update({
        stock
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