import { Item } from '../data/models/Item.model.js';
import {
    deleteOne,
    findAll,
    findOne,
    register,
    update
} from '../data/repositories/item.repository.js';

const registerItem = async (req, res) => {
    if (!req.body) {
        return res.status(400).send('Bad Request');
    }

    const { name, category, size, price, stock } = req.body;
    if (!name || !category || !size || !price || !stock) {
        return res.status(400).send('Bad Request');
    }

    const newItem = Item.build({
        name, category, size, price, stock
    })

    await register(newItem);

}

const findAllItems = async (req, res) => {
    const items = await findAll();
    if (!items) {
        return res.send('Error');
    }
    return items;
}

const findOneItem = async (req, res) => {
    if (!req.body || !req.param) {
        return res.send('Error');
    }

    const { idItem } = req.param;
    const { category, size } = req.body;
    //no tiene ningún parámetro para buscar
    if (!idItem && !category && !size) {
        return res.send('Error');
    }

    const item = await findOne({ idItem, category, size });

    return item;
}

const deleteOneItem = async (req, res) => {
    if (!req.param) {
        return res.send('Error');
    }

    const { idItem } = req.param;
    if (!idItem) {
        return res.send('Error');
    }

    const item = await findOne({ idItem });
    if (!item) {
        return res.send('no existe');
    }

    const result = await deleteOne({ idItem });

    if (result === 0) {
        return res.send('no se eliminó nada');
    }

    res.send('item eliminado');

}

const updateItem = async (req, res) => {
    if (!req.body || req.param) {
        return res.send('error');
    }
    const { idItem } = req.param;
    const data = req.body;

    const item = await findOne({ idItem }).dataValues;

    const newItem = { ...item, ...data };

    const result = await update(newItem);

    if (result === 0) {
        return res.send('no se actualizó nada');
    }

    return res.send('item actualizado');
}

export default {
    registerItem,
    findAllItems,
    findOneItem,
    deleteOneItem,
    updateItem,
};

