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

const findAllSales= async (req, res) => {
    const sales = await findAll();
    if (!sales) {
        return res.send('Error');
    }
    res.send(sales);
}

const findOneSale = async (req, res) => {
    if (!req.body || !req.params) {
        return res.send('Error');
    }

    const { idSale } = req.params;
    //no tiene ningún parámetro para buscar
    if (!idSale) {
        return res.send('Error');
    }

    const sale = await findOne({ idSale});

    res.send(sale);
}

const deleteOneSale = async (req, res) => {
    try {
        if (!req.params) {
            return res.send('Error');
        }

        const { idSale} = req.params;
        if (!idSale) {
            return res.send({ message: 'error' });
        }

        const sale = await saleRepository.findOne(idSale);
        if (!sale) {
            return res.send({ message: 'sale Not Found' });
        }

        const result = await saleRepository.deleteOne(idSale);

        if (result === 0) {
            return res.send('sale Not Deleted');
        }

        res.send({ message: 'Deleted sale' });
    } catch (error) {
        res.send(error.message);
    }
}

export default {
    registerSale,
    findAllSales,
    findOneSale,
    deleteOneSale
};

