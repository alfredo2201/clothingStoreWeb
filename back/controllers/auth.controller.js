// import clientRepository from '../repositories/client.repository.js';
import { Client } from '../data/models/Client.model.js';
import { Admin } from '../data/models/Admin.model.js';
import jwt from 'jsonwebtoken';

const login = async (req, res, next) => {
    try {
        if (!req.body) {
            return res.send({ message: 'bad request' });
        }

        const { email, password } = req.body;

        if (!email || !password) {
            return resres.status(400).send({ message: 'bad request' });
        }

        const client = await Client.findOne({ where: { email } });
        if (client) {

            if (!client.verifyPassword(password)) {
                return res.status(401).send({ message: 'incorrect password' });
            }

            //generar token
            const token = jwt.sign({ idClient: client.idClient, userName: client.userName },
                process.env.SECRET_KEY_CLIENT, {
                expiresIn: '1d'
            });
            return res.send({
                message: 'successful',
                id: client.idClient,
                userName: client.userName,
                name: client.name,
                lastName: client.lastName,
                email: client.email,
                address: client.address,
                token: token,
                imgPerfil: client.imgPerfil,
                role: "client"
            })
        }

        const admin = await Admin.findOne({ where: { email } });
        if (admin) {
            if (!admin.verifyPassword(password)) {
                return res.status(401).send({ message: 'incorrect password' });
            }
            const token = jwt.sign({ idAdmin: admin.idAdmin, useraName: admin.userName },
                process.env.SECRET_KEY_ADMIN, {
                expiresIn: '1d'
            });
            return res.send({
                message: 'successful',
                id: admin.idClient,
                userName: admin.userName,
                name: admin.name,
                email: admin.email,
                token: token,
                role: "admin"
            })
        }
        return res.status(401).send({
            message: 'Unsuccess login'
        })
    } catch (error) {
        next(error)
    }
}

const info = async (req, res) => {
    res.send('Hello World');
}

const infoAdmin = async (req, res) => {
    res.send('Hello Admin');
}

export default {
    login,
    info
}