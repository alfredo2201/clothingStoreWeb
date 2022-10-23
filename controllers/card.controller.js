import cardRepository from '../data/repositories/card.repository.js';
import { findOne } from '../data/repositories/client.repository.js';

const registerCard = async (req, res, next) => {
    try {
        const {nameOwner, cardNumber, expirationDate, idClient } = req.body;
        const lastCardNumbers = cardNumber.slice(12, 16);
        //busco al cliente
        var client = await findOne(idClient);
        if (!client) {
            //si el clinente no existe
            const error = new Error('Bad request Client not exist');
            error.httpStatusCode = 400;
            next(error);
            return;
        }
        const newCard = await cardRepository.register({ nameOwner, cardNumber, expirationDate, idClient, lastCardNumbers});
        if (!newCard) {
            const error = new Error('Error to create card');
            error.httpStatusCode = 400;
            next(error);
            return;
        }
        return res.status(201).send({nameOwner:newCard.nameOwner, card: `************${newCard.lastCardNumbers}`});
    } catch (error) {
        // error.shttpStatusCode = 500;
        next(error);
    }
}

const findAllCards = async (req, res, next) => {
    try {
        if (!req.body) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }
        const { idClient } = req.body

        if (!idClient) {
            const error = new Error('Bad request1');
            error.httpStatusCode = 400;
            next(error);
            return;
        }
        const cards = await cardRepository.findAll({ idClient });

        if (!cards) {
            const error = new Error('Error found the cards');
            error.httpStatusCode = 400;
            next(error);
            return;
        }
        return res.status(200).send(cards);
    } catch (error) {
        next(error)
    }
}

const finOneCard = async (req, res, next) => {
    try {
        if (!req.params) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        const { idCard } = req.params;

        if (!idCard) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        const card = await cardRepository.findOne({ idCard });

        if (!card) {
            const error = new Error('Card not found');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        return res.status(200).send(card);
    } catch (error) {
        next(error);
    }
}

const deleteCard = async (req, res, next) => {
    try {
        if (!req.body) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }
        const { idCard, idClient } = req.body;

        if (!idCard || !idClient) {
            const error = new Error('Bad request');
            error.httpStatusCode = 400;
            next(error);
            return;
        }
        const result = await cardRepository.deleteOne({ idCard, idClient });

        if (result === 0) {
            const error = new Error('Card not deleted');
            error.httpStatusCode = 400;
            next(error);
        }

        return res.status(200).send('Deteled Card');
    } catch (error) {
        next(error);
    }
}

const updateCard = async (req, res, next) => {
    try {
        if (!req.body || !req.params) {
            const error = new Error('Bad Request');
            error.httpStatusCode = 404;
            next(error);
            return;
        }

        const { idCard } = req.params;
        const data = req.body;

        const card = await cardRepository.findOne({ idCard });
        if (!card) {
            const error = new Error('Card not found');
            error.httpStatusCode = 404;
            next(error);
            return;
        }

        const newCard = { ...card.dataValues, ...data };
        const client = await findOne(newCard.idClient);
        if (!client) {
            const error = new Error('Client not exist');
            error.httpStatusCode = 404;
            next(error);
            return;
        }

        const result = await cardRepository.update(newCard);
        if (result === 0) {
            const error = new Error('Card not updated');
            error.httpStatusCode = 400;
            next(error);
            return;
        }
        return res.status(200).send({ message: 'updated card' });
    } catch (error) {
        next(error);
    }
}

export default {
    registerCard,
    deleteCard,
    findAllCards,
    finOneCard,
    updateCard
}