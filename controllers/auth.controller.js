// import clientRepository from '../repositories/client.repository.js';
import { Client } from '../data/models/Client.model.js';
import jwt from 'jsonwebtoken';

const login = async(req, res) =>{
    if(!req.body){
        return res.send({message: 'bad request'});
    }

    const {email, password} = req.body;

    if(!email || !password){
        return res.send({message: 'bad request'});
    }

    const client = await Client.findOne({where:{email}});
    if(!client){
        process
        return res.send({message: 'client not found'});
    }

    //verificar contraseña del usuario
    if(!client.verifyPassword(password)){
        return res.send({message: 'incorrect password'});
    }

    //generar token
    const token = jwt.sign({idClient: client.idClient,userName: client.userName},
        process.env.SECRET_KEY_CLIENT, {
            expiresIn: '15m'
        });
    res.send({
        message: 'successful',
        token: token
    })
}

const info = async(req, res) =>{
    res.send('Hello World');
}

const infoAdmin = async(req, res) =>{
    res.send('Hello Admin');
}

export default {
    login,
    info
}