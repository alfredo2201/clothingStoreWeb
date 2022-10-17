import { Client } from '../data/models/Client.model.js';
import {
    deleteOne,
    findAll,
    findOne,
    register,
    update
} from '../data/repositories/client.repository.js';

const registerClient = async (req, res, next) => {
    try{
        if (!req.body) {
            return res.status(400).send('Bad Request 1');
        }
    
        const { userName, name, lastName, address, email, password } = req.body;
        if (!userName || !name || !lastName || !address || !email || !password) {
            return res.status(400).send('Bad Request 2');
        }
    
        const newClient = Client.build({
            userName, name, lastName, address, email, password
        })
        
        await register(newClient);
    
        res.status(201).send('Cliente Creado');
    }catch(error){
        next(error);
    }
}

const findAllClients = async (req, res) => {
    const clients = await findAll();
    if (!clients) {
        return res.send('Error');
    }
    res.send(clients);
}

const findOneClient = async (req, res) => {
    if (!req.body || !req.params) {
        return res.send('Error');
    }

    const { idClient } = req.params;
    //no tiene ningún parámetro para buscar
    if (!idClient) {
        return res.send('Error');
    }

    const client = await findOne({ idClient});

    res.send(client);
}

const deleteOneClient = async (req, res, next) => {
    try {
        if (!req.params) {
            return res.send('Error');
        }
    
        const { idClient } = req.params;
        if (!idClient) {
            const error = new Error('Client not found');
            error.httpStatusCode = 400;
            next(error)
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
    } catch (error) {
        next(error);
    }

}

const updateClient = async (req, res) => {
    if (!req.body || !req.params) {
        return res.send('Error 1');
    }

    const { idClient } = req.params;
    const data = req.body;

    const client = await findOne(idClient);

    if(!client){
        return res.send('Error Client not Found 2');
    }

    const newClient = { ...client.dataValues, ...data };

    const result = await update(newClient);

    if (result === 0) {
        return res.send('no se actualizó nada');
    }

    return res.send('cliente actualizado');
}

export default {
    registerClient,
    findAllClients,
    findOneClient,
    deleteOneClient,
    updateClient,
};
