import { Item } from '../data/models/Item.model.js';
import itemRepository from '../data/repositories/item.repository.js';

const registerItem = async (req, res, next) => {
    try {
        if (!req.body) {
            // throw new Error('Bad request 1');
            const error = new Error('Bad request 1');
            error.httpStatusCode = 400;
            next(error)
        }

        const { name, category, size, price, stock } = req.body;

        if (!name || !category || !size || !price || !stock) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
        }

        const newItem = Item.build({
            name, category, size, price, stock
        })

        const result = await itemRepository.register(newItem);

        res.send('Registed Item');
    } catch (error) {
        next(error);
    }


}

const findAllItems = async (req, res, next) => {
    try {
        const items = await itemRepository.findAll();
        if (!items) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
        }
        res.send(items);
    } catch (error) {
        res.send(error.message);
    }
}

const findOneItem = async (req, res) => {
    try {
        if (!req.params) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
        }

        const { idItem } = req.params;
        // const { category, size } = req.body;
        //no tiene ningún parámetro para buscar
        if (!idItem) {
            return res.send('Error');
        }

        const item = await itemRepository.findOne(idItem);

        if (!item) {
            const error = new Error('Item not fount');
            error.httpStatusCode = 400;
            next(error);
        }

        res.send(item);
    } catch (error) {
        res.send(error.message);
    }
}

const deleteOneItem = async (req, res) => {
    try {
        if (!req.params) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
        }

        const { idItem } = req.params;
        if (!idItem) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
        }

        const item = await itemRepository.findOne(idItem);
        if (!item) {
            const error = new Error('Item not found');
            error.httpStatusCode = 400;
            next(error);
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
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
        }
        const { idItem } = req.params;
        const data = req.body;

        const item = await itemRepository.findOne(idItem);

        if (!item) {
            const error = new Error('Item Not Found');
            error.httpStatusCode = 400;
            next(error);
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

