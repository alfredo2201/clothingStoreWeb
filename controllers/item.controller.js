import { Item } from '../data/models/Item.model.js';
import itemRepository from '../data/repositories/item.repository.js';

const registerItem = async (req, res, next) => {
    try {
        if (!req.body) {
            // throw new Error('Bad request 1');
            const error = new Error('Bad request no body');
            error.httpStatusCode = 400;
            next(error)
            return;
        }

        const { name, category, size, price, stock } = req.body;

        if (!name || !category || !size || !price || !stock) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        const newItem = Item.build({
            name, category, size, price, stock
        })

        await itemRepository.register(newItem);

        res.status(201).send('Item Creado');
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
            return;
        }
        res.send(items);
    } catch (error) {
        next(error);
    }
}

const findOneItem = async (req, res, next) => {
    try {
        if (!req.params) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        const { idItem } = req.params;
        // const { category, size } = req.body;
        //no tiene ningún parámetro para buscar
        if (!idItem) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        const item = await itemRepository.findOne({idItem});

        if (!item) {
            const error = new Error('Item not fount');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        res.send(item);
    } catch (error) {
        next(error);
    }
}

const deleteOneItem = async (req, res, next) => {
    try {
        if (!req.params) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        const { idItem } = req.params;
        if (!idItem) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        const item = await itemRepository.findOne({idItem});
        if (!item) {
            const error = new Error('Item not found');
            error.httpStatusCode = 400;
            next(error);
        }

        const result = await itemRepository.deleteOne({idItem});

        if (result === 0) {
            const error = new Error('Item not deleted');
            error.httpStatusCode = 400;
            next(error);
        }

        res.send({ message: 'Deleted Item' });
    } catch (error) {
        next(error);
    }
}

const updateItem = async (req, res, next) => {
    try {
        if (!req.body || !req.params) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
        }
        const { idItem } = req.params;
        const data = req.body;

        const item = await itemRepository.findOne({idItem});

        if (!item) {
            const error = new Error('Item Not Found');
            error.httpStatusCode = 400;
            next(error);
        }

        const newItem = { ...item.dataValues, ...data };

        const result = await itemRepository.update(newItem, idItem);

        if (result === 0) {
            const error = new Error('Item not updated');
            error.httpStatusCode = 400;
            next(error);
        }

        return res.send({ message: 'item Updated' });
    } catch (error) {
        next(error);
    }
}

export default {//discord
    registerItem,
    findAllItems,
    findOneItem,
    deleteOneItem,
    updateItem,
};

