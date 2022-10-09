import { Card } from "../data/models/Card.model.js";
import { Client } from "../data/models/Client.model.js";

export const ejecuteCardTest = async() =>{
    console.log('Se crean las Cards');
    await createCard();

    let cards = await getAllCards();
    cards.map(c => console.log(c.dataValues));

    console.log('Se actualiza Card 1');
    await updateCards();

    console.log('Se elimina Card 1');
    await deleteCard();

    console.log('Cards restantes');
    cards = await getAllCards();
    cards.map(c => console.log(c.dataValues));
}

const createCard = async() =>{
    const client = await Client.findOne({where: {idClient: 2}});
    // console.log('El id del cliente es', client.idClient);
    const card = await Card.create({
        nameOwner: client.name,
        cardNumber: '1234567890',
        expirationDate: '10/26',
        idClient: client.idClient
    })

    const client2 = await Client.findOne({where: {idClient: 3}});
    await Card.create({
        nameOwner: client2.name,
        cardNumber: '1234567891',
        expirationDate: '10/26',
        idClient: client2.idClient
    })
    
}

const getAllCards = async()=>{
    const cards = await Card.findAll({
        attributes: ['nameOwner', 'cardNumber', 'expirationDate', 'idClient']
    });
    return cards;
}

const updateCards = async()=>{
    const card = await Card.findOne({idCard: 1});
    console.log('Card antes de actualizar: ', card.dataValues);
    await card.update({
        nameOwner: 'Nuevo Owner'
    });
    console.log('Card después de actualizar: ', card.dataValues);
}

const deleteCard = async() =>{
    await Card.destroy({
        where: {idCard: 1}
    })
}