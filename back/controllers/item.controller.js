import { Item } from '../data/models/Item.model.js';
import itemRepository from '../data/repositories/item.repository.js';

const registerItem = async (req, res, next) => {
    try {
        const { name, category, size, price, stock } = req.body;

        const newItem = Item.build({
            name, category, size, price, stock
        })
        const item = await itemRepository.register(newItem);
        
        res.status(201).send(item);
    } catch (error) {
        next(error);
    }
}

const findAllItems = async (req, res, next) => {
    try {
        const items = await itemRepository.findAll();
        res.send(items);
    } catch (error) {
        next(error);
    }
}

const findOneItem = async (req, res, next) => {
    try {
        const { idItem } = req.params;
        //no tiene ningún parámetro para buscar
        const item = await itemRepository.findOne({ idItem });
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
        const { idItem } = req.params;
        const item = await itemRepository.findOne({ idItem });
        if (!item) {
            const error = new Error('Item not found');
            error.httpStatusCode = 400;
            next(error);
        }

        const removedItem = await itemRepository.deleteOne({ idItem });

        if (removedItem === 0) {
            const error = new Error('Item not deleted');
            error.httpStatusCode = 400;
            next(error);
        }

        res.send({ message: 'Deleted Item', item: item });
    } catch (error) {
        next(error);
    }
}

const updateItem = async (req, res, next) => {
    try {
        const { idItem } = req.params;
        const dataItem = req.body;

        const item = await itemRepository.findOne({ idItem });

        if (!item) {
            const error = new Error('Item Not Found');
            error.httpStatusCode = 400;
            next(error);
        }
        const newItem = { ...item.dataValues, ...dataItem };
        const itemUpdated = await itemRepository.update(newItem, idItem);

        if (itemUpdated === 0) {
            const error = new Error('Item not updated');
            error.httpStatusCode = 400;
            next(error);
        }
        return res.send({
            idItem: newItem.idITem,
            name: newItem.name,
            caregory: newItem.category,
            size: newItem.size,
            price: newItem.price,
            stock: newItem.stock,
        });
    } catch (error) {
        next(error);
    }
}

export default {
    registerItem,
    findAllItems,
    findOneItem,
    deleteOneItem,
    updateItem,
};

