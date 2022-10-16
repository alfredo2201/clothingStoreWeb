import { ItemSale } from '../data/models/ItemSale.model.js';
import {
    deleteOne,
    findAll,
    findOne,
    register,
    update
} from '../data/repositories/itemSales.repository.js';

const registerItemSale = async (req, res) => {
    if (!req.body) {
        return res.status(400).send('Bad Request 1');
    }

    const { price, amount } = req.body;
    if (!price || !amount) {
        return res.status(400).send('Bad Request 2');
    }

    const newItemSale = ItemSale.build({
        price, amount
    })
    
    await register(newItemSale);

    res.status(201).send('ItemSale Creado');
}

const findAllItemSale = async (req, res) => {
    const itemsSale = await findAll();
    if (!itemsSale) {
        return res.send('Error');
    }
    res.send(itemsSale);
}

const findOneItemSale = async (req, res) => {
    if (!req.body || !req.params) {
        return res.send('Error');
    }

    const { idItemSale } = req.params;
    //no tiene ningún parámetro para buscar
    if (!idItemSale) {
        return res.send('Error');
    }

    const itemSale = await findOne({ idItemSale});

    res.send(itemSale);
}

const deleteOneItemSale = async (req, res) => {
    if (!req.params) {
        return res.send('Error');
    }

    const { idItemSale } = req.params;
    if (!idItemSale) {
        return res.send('Error');
    }

    const itemSale = await findOne({ idItemSale });
    if (!itemSale) {
        return res.send('no existe');
    }

    const result = await deleteOne({ idItemSale });

    if (result === 0) {
        return res.send('no se eliminó nada');
    }

    res.send('ItemSale eliminado');

}

const updateItemSale = async (req, res) => {
    if (!req.body || !req.params) {
        return res.send('Error 1');
    }

    const { idItemSale } = req.params;
    const data = req.body;

    const itemSale = await findOne(idItemSale);

    if(!itemSale){
        return res.send('Error ItemSale not Found 2');
    }

    const newItemSale = { ...itemSale.dataValues, ...data };

    const result = await update(newItemSale);

    if (result === 0) {
        return res.send('no se actualizó nada');
    }

    return res.send('ItemSale actualizado');
}

export default {
    registerItemSale,
    findAllItemSale,
    findOneItemSale,
    deleteOneItemSale,
    updateItemSale,
};
