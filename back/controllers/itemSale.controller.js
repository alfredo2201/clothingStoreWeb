import { ItemSale } from '../data/models/ItemSale.model.js';
import {
    deleteOne,
    findAll,
    findOne,
    register,
    update
} from '../data/repositories/itemSales.repository.js';

import itemRepository from '../data/repositories/item.repository.js';

const registerItemSale = async (req, res, next) => {
    try {
        if (!req.body) {
            const error = new Error('Bad Request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        const { amount, idItem, idSale} = req.body;
        if (!amount || !idItem || !idSale) {
            const error = new Error('Bad Request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        const item = await itemRepository.findOne({ idItem });
        if (!item) {
            const error = new Error('Bad Request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }
        const price = amount * item.price;
        const itemSale = ItemSale.build({
            price, amount, idItem, idSale
        })

        const newItemSale = await register(itemSale);

        res.status(201).send(newItemSale);
    } catch (error) {
        next(error);
    }
}

const findAllItemSale = async (req, res, next) => {
    try {
        if (!req.body) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }
        const {idSale} = req.body
        const itemsSale = await findAll({idSale});
        if (!itemsSale) {
            const error = new Error('Bad Request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }
        res.send(itemsSale);
    } catch (error) {
        res.send(error.message);
    }
}

const findOneItemSale = async (req, res, next) => {
    try {
        if (!req.body || !req.params) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        const { idItemSale } = req.params;
        //no tiene ningún parámetro para buscar
        if (!idItemSale) {
            const error = new Error('itemSale not fount');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        const itemSale = await findOne({ idItemSale });

        res.send(itemSale);
    } catch (error) {
        next(error);
    }
}

const deleteOneItemSale = async (req, res, next) => {
    try {
        if (!req.params) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        const { idItemSale } = req.params;
        if (!idItemSale) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        // const itemSale = await findOne({ idItemSale });
        if (!idItemSale) {
            const error = new Error('itemSale not found');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        const result = await deleteOne({ idItemSale });

        if (result === 0) {
            const error = new Error('ItemSale not deleted');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        res.send({ message: 'Deleted itemSale' });
    } catch (error) {
        next(error);
    }

}

const updateItemSale = async (req, res, next) => {
    try {
        if (!req.body || !req.params) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
        }

        const { idItemSale } = req.params;
        const data = req.body;

        const itemSale = await findOne(idItemSale);

        if (!itemSale) {
            const error = new Error('ItemSale Not Found');
            error.httpStatusCode = 400;
            next(error);
        }

        const newItemSale = { ...itemSale.dataValues, ...data };

        const result = await update(newItemSale);

        if (result === 0) {
            const error = new Error('ItemSale not updated');
            error.httpStatusCode = 400;
            next(error);
        }

        return res.send({ message: 'itemSale Updated' });
    } catch (error) {
        next(error);
    }
}

export default {
    registerItemSale,
    findAllItemSale,
    findOneItemSale,
    deleteOneItemSale,
    updateItemSale,
};
