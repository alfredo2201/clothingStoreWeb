import { Sale } from "../data/models/Sale.model.js";
import {
    deleteOne,
    findAll,
    findOne,
    register,
    update    
} from '../data/repositories/Sale.repository.js';

const registerSale = async(req, res) =>{
    try {
        if(!req.body){
            throw new Error('Bad request');
        }

        const {payMethod, total} = req.body;

        if(!payMethod || !total){
            throw new Error('Bad Request');
        }

        await Sale.create({payMethod, total});

        res.status(201).send('Cliente Creado');
    } catch (error) {
        res.send(error.message);
    }
}

