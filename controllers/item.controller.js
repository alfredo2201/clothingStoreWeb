import { Item } from '../data/models/Item.model.js';
import itemRepository from '../data/repositories/item.repository.js';

const registerItem = async (req, res) => {
    try {
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

        const result = await itemRepository.register(newItem);

        res.send('Registed Item', result);
    } catch (error) {
        res.send(error.message);
    }


}

const findAllItems = async (req, res) => {
    try {
        const items = await itemRepository.findAll();
        if (!items) {
            return res.send('Error');
        }
        res.send(items);
    } catch (error) {
        res.send(error.message);
    }
}

const findOneItem = async (req, res) => {
    try {
        if (!req.params) {
            return res.send({ message: 'item nor found' });
        }

        const { idItem } = req.params;
        // const { category, size } = req.body;
        //no tiene ningún parámetro para buscar
        if (!idItem) {
            return res.send('Error');
        }

        const item = await itemRepository.findOne(idItem);

        if (!item) {
            return res.status(400).send('Item Not Found');
        }

        res.send(item);
    } catch (error) {
        res.send(error.message);
    }
}

const deleteOneItem = async (req, res) => {
    try {
        if (!req.params) {
            return res.send('Error');
        }

        const { idItem } = req.params;
        if (!idItem) {
            return res.send({ message: 'error' });
        }

        const item = await itemRepository.findOne(idItem);
        if (!item) {
            return res.send({ message: 'Item Not Found' });
        }

        const result = await itemRepository.deleteOne(idItem);

        if (result === 0) {
            return res.send('Item Not Deleted');
        }

        res.send({ message: 'Deleted Item' });
    } catch (error) {
        res.send(error.message);
    }
}

const updateItem = async (req, res) => {
    try {
        if (!req.body || !req.params) {
            return res.send('Error');
        }
        const { idItem } = req.params;
        const data = req.body;

        const item = await itemRepository.findOne(idItem);

        if (!item) {
            return res.send({ message: 'Item not found' });
        }

        const newItem = { ...item.dataValues, ...data };

        const result = await itemRepository.update(newItem);

        if (result === 0) {
            return res.send('no se actualizó nada');
        }

        return res.send({ message: 'item actualizado' });
    } catch (error) {
        res.send({ message: error.message });
    }
}

export default {
    registerItem,
    findAllItems,
    findOneItem,
    deleteOneItem,
    updateItem,
};

