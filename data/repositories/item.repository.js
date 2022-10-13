import { or } from "sequelize";
import { Item } from "../models/Item.model.js";

const register = async (item) => {
    if (!item) {
        res.send({ message: 'error item' })
    }
    const { name, category, size, price, stock } = item;
    await Item.create({
        name,
        category,
        size,
        price,
        stock
    });
}

const findAll = async () => {
    const items = await Item.findAll();
    return items;
}

//busca por category, id or size
const findOne = async (search) => {
    const { size, category, idItem } = search;
    // const item = await 
    // const item = await Item.findOne({where: {idItem: search}});
    const item = await Item.findOne({
        where: or({ idItem }, { size }, { category })
    })
    return item;
}

const deleteOne = async (idItem) => {
    return await Item.destroy({
        where:
        {
            idItem
        }
    });
}

const update = async (newData) => {
    const { idItem, name, category, size, price, stock } = newData;

    return await Item.update({
        name, category, size, price, stock
    },
        {
            where: { idItem }
        }
    );
}

export default {
    register,
    findAll,
    findOne,
    deleteOne,
    update
}