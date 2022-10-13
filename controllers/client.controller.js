import { Client } from '../data/models/Client.model.js';
import {
    deleteOne,
    findAll,
    findOne,
    register,
    update
} from '../data/repositories/client.repository.js';

const registerClient = async (req, res) => {
    if (!req.body) {
        return res.status(400).send('Bad Request');
    }

    const { userName, name, lastName, address, email, password } = req.body;
    if (!userName || !name || !lastName || !address || !email || !password) {
        return res.status(400).send('Bad Request');
    }

    const newClient = Client.build({
        userName, name, lastName, address, email, password
    })
    
    await register(newClient);

}

const findAllClients = async (req, res) => {
    const clients = await findAll();
    if (!clients) {
        return res.send('Error');
    }
    return clients;
}

const findOneClient = async (req, res) => {
    if (!req.body || !req.param) {
        return res.send('Error');
    }

    const { idClient } = req.param;
    //no tiene ningún parámetro para buscar
    if (!idClient) {
        return res.send('Error');
    }

    const client = await findOne({ idClient});

    return client;
}

const deleteOneClient = async (req, res) => {
    if (!req.param) {
        return res.send('Error');
    }

    const { idClient } = req.param;
    if (!idClient) {
        return res.send('Error');
    }

    const client = await findOne({ idClient });
    if (!client) {
        return res.send('no existe');
    }

    const result = await deleteOne({ idClient });

    if (result === 0) {
        return res.send('no se eliminó nada');
    }

    res.send('cliente eliminado');

}

const updateClient = async (req, res) => {
    if (!req.body || req.param) {
        return res.send('Error');
    }
    const { idClient } = req.param;
    const data = req.body;

    const client = await findOne({ idClient }).dataValues;

    const newClient = { ...client, ...data };

    const result = await update(newClient);

    if (result === 0) {
        return res.send('no se actualizó nada');
    }

    return res.send('cliente actualizadoo);
}

export default {
    registerClient,
    findAllClients,
    findOneClient,
    deleteOneClient,
    updateClient,
};
