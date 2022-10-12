import {ItemSale} from "../models/ItemSale.model";

const register = async(itemSale) =>{
    if(!itemSale){
        res.send({message: 'error itemSale'})
    }
    const {idItem, price, stock} = itemSale;
    await ItemSale.create({
        idItem, 
        price, 
        stock
    });
} 

const findAll = async() =>{
    const itemSales = await ItemSale.findAll();
    return itemSales;
}

//busca por price, id, stock
const findOne = async(search) =>{
    const {price, stock, idItemSale} = search; 
    const itemSale = await ItemSale.findOne({
        where: {$or:[{
            idItemSale,
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

const deleteOne = async(idItemSale) =>{
    return await ItemSale.destroy({where: 
        {
            idItemSale
        }
    });
}

const update = async(newData) =>{
    const {idItemSale, stock} = newData;

    return await Item.update({
        stock
    },
    {
        where: {idItemSale}
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