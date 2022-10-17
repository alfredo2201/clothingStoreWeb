import { Card } from '../data/models/Card.model.js';
import cardRepository from '../data/repositories/card.repository.js';
import { findOne } from '../data/repositories/client.repository.js';

const registerCard = async (req, res) => {
    try {
        if (!req.body) {
            return res.send({ message: 'Bad Request 1' });
        }

        const { nameOwner, cardNumber, expirationDate, idClient } = req.body;
        //busco al cliente
        var client = await findOne(idClient);
        console.log(client.dataValues);
        if (!client) {//si el clinente no existe
            const error = new Error('Bad request Client not exist');
            error.httpStatusCode = 400;
            next(error);
            return res.send('Bad Request client not exist');
        }
        //vericico que nada esté vacio
        if (!nameOwner || !cardNumber || !expirationDate) {
            return res.send({ message: 'Bad Request 2' });
        }
        //valido la tarjeta
        if (!(cardNumber.length === 16)) {
            return res.send({ message: 'bad request 3' });
        }
        //creo el objeto Card
        const newCard = Card.build({
            nameOwner,
            cardNumber,
            expirationDate,
            idClient: client.idClient
        });

        console.log(newCard.dataValues);
        //guardo el objeto card
        // newCard.save();

        // const result = await cardRepository.register({
        //     nameOwner, 
        //     cardNumber, 
        //     expirationDate,
        //     idClient
        // });
        return res.status(201).send(`Registed Card`);
    } catch (error) {
        res.send(error.message);
    }
}

const findAllCards = async (req, res) => {
    try {
        const cards = await cardRepository.findAll();

        return res.send(cards);
    } catch (error) {
        return res.send({ message: error.message })
    }
}

const finOneCard = async (req, res) => {
    try {
        if (!req.params) {
            return res.send({ message: 'bad request' });
        }

        const { idCard } = req.params;

        if (!idCard) {
            return res.send({ message: 'bad request' });
        }

        const card = await cardRepository.findOne({ idCard });

        if (!card) {
            return res.send('Card not found');
        }

        return res.send(card);
    } catch (error) {
        return res.send({ message: error.message })
    }
}

const deleteCard = async (req, res) => {
    try {
        if (!req.params) {
            return res.send('bad request');
        }
        const { idCard } = req.params;
        const result = await cardRepository.deleteOne({ idCard });

        if (result === 0) {
            return res.send('Card Not Deleted');
        }

        return res.send('Deteled Card');
    } catch (error) {
        return res.send({ message: error.message });
    }
}

const updateCard = async (req, res) => {
    try {
        if (!req.body || !req.params) {
            return res.send({ message: 'bad request' });
        }

        const { idCard } = req.params;
        const data = req.body;

        const card = await cardRepository.findOne({ idCard });
        // const client = await findOne({idClient: data.idClient});
        if (!card) {
            return res.send({ message: 'card not found' });
        }
        const newCard = { ...card.dataValues, ...data };

        const client = await findOne(newCard.idClient);
        if (!client) {
            return res.send({ message: 'the card client not exist' });
        }

        const result = await cardRepository.update(newCard);

        if (result === 0) {
            return res.send({ message: 'card not updated' })
        }

        return result.send({ message: 'updated card' });
    } catch (error) {
        return res.send({ message: error.message });
    }
}

export default {
    registerCard,
    deleteCard,
    findAllCards,
    finOneCard,
    updateCard
}