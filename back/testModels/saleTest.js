import { Sale } from "../data/models/Sale.model.js"; 
import { Card } from "../data/models/Card.model.js";

export const ejecuteSaleTest = async() =>{
    const sale = await createSale();
    console.log(sale.dataValues);
}

const createSale = async() =>{
    const card = await Card.findOne({where: {idCard: 2}})
    const sale = await Sale.create({
        paymentMethod: 'Debito',
        total: 1000,
        idClient: card.idClient,
        idCard: card.idCard,
    });
    return sale;
}
