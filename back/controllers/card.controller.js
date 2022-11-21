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
        const { idCard } = req.params;    

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
        const { idCard, idClient } = req.body;
        const card = await cardRepository.deleteOne({ idCard, idClient });

        if (card === 0) {
            const error = new Error('Card not deleted');
            error.httpStatusCode = 400;
            next(error);
        }

        return res.status(200).send({message: 'Deteled Card'});
    } catch (error) {
        next(error);
    }
}

export default {
    registerCard,
    deleteCard,
    findAllCards,
    finOneCard,
}