import { Client } from '../data/models/Client.model.js';
import {
    deleteOne,
    findAll,
    findOne,
    register,
    update,
    findOnebyEmail
} from '../data/repositories/client.repository.js';
import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv';
dotenv.config();
dotenv.config({ path: '.env' });


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const registerClient = async (req, res, next) => {
    try {
        const { userName, name, lastName, address, email, password } = req.body;
        const findUser = await findOnebyEmail({email});
        if(findUser){
            const error = new Error('Email already registed, use other email');
            error.httpStatusCode = 400;
            next(error);
            return;
        }

        if(!req.file){
            const error = new Error('You most have a image');
            error.httpStatusCode = 400;
            next(error);
            return;
        }
        const upload = await cloudinary.uploader.upload(req.file.path, {
            folder: 'perfil'
        })
        
        const newClient = Client.build({
            userName, name, lastName, address, email, password, imgPerfil: upload.url,
        });


        const result = await register(newClient);

        return res.status(201).send({
            id: result.idClient,
            userName: result.userName,
            name: result.name,
            lastName: result.lastName,
            address: result.address,
            email: result.email,
            imgPerfil: result.imgPerfil
        });

    } catch (error) {
        next(error);
    }
}

const findAllClients = async (req, res, next) => {
    try {
        const clients = await findAll();
        if (!clients) {
            const error = new Error('Error');
            error.httpStatusCode = 400;
            next(error);
        }
        res.send(clients);
    } catch (error) {
        next(error)
    }
}

const findOneClient = async (req, res, next) => {
    try {
        const { idClient } = req.params
        const client = await findOne({ idClient });

        res.send(client);
    } catch (error) {
        next(error);
    }
}

const deleteOneClient = async (req, res, next) => {
    try {
        const { idClient } = req.params;

        const client = await findOne({ idClient });
        if (!client) {
            const error = new Error('Client not found');
            error.httpStatusCode = 400;
            next(error);
        }

        const result = await deleteOne({ idClient: client.idClient });

        if (result === 0) {
            const error = new Error('Client not deleted');
            error.httpStatusCode = 400;
            next(error);
        }

        res.send({
            msg: "Deleted Client",
            client
        });
    } catch (error) {
        next(error);
    }

}

const updateClient = async (req, res, next) => {
    try {
        const { idClient } = req.params;
        const data = req.body;
        const client = await findOne({ idClient });

        if (!client) {
            const error = new Error('Client not found');
            error.httpStatusCode = 400;
            next(error);
            return;
        }
        console.log(client.dataValues);
        //mesa
        const newClient = { ...client.dataValues, ...data };

        const result = await update(newClient);

        if (result === 0) {
            const error = new Error('Client not found');
            error.httpStatusCode = 400;
            next(error);
        }

        return res.send({
            id: newClient.idClient,
            userName: newClient.userName,
            name: newClient.name,
            lastName: newClient.lastName,
            address: newClient.address,
            email: newClient.email,
            img:newClient.imgPerfil
        });
    } catch (error) {
        next(error);
    }
}

export default {
    registerClient,
    findAllClients,
    findOneClient,
    deleteOneClient,
    updateClient,
};
