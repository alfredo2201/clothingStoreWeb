import { Client } from '../data/models/Client.model.js'

export const ejecuteTest = async () => {
    // se crean clientes
    await createClient();
    console.log('Clientes Creados');
    //se obtienen los clientes
    const clientes = await getAllClients();
    clientes.map(x => console.log(x.dataValues));

    //actualizar cliente
    console.log('Actualizar Cliente');
    await updateCliente();

    //eliminar cliente
    console.log('Eliminar cliente con idClient = 1');
    await deleteClient();

    //Mostrar Clientes
    console.log('Clientes restantes');
    const clientes2 = await getAllClients();
    clientes2.map(x => console.log(x.dataValues));
}

//crear cliente
const createClient = async () => {
    await Client.create({
        userName: 'comprador',
        name: "client1",
        lastName: "lastname1",
        address: 'my house',
        email: 'email@email.com',
        password: 'akjsdna'
    });

    await Client.create({
        userName: 'comprador2',
        name: "client2",
        lastName: "lastname2",
        address: 'my house2',
        email: 'email2@email.com',
        password: 'askjdnakjsd'
    })

    await Client.create({
        userName: 'comprador3',
        name: "client3",
        lastName: "lastname3",
        address: 'my house3',
        email: 'email3@email.com',
        password: 'asdknaskd'
    })
    // return cliente.dataValues;
}

const getAllClients = async () => {
    const clients = await Client.findAll({
        attributes: ['userName', 'name', 'lastName', 'address', 'email']
    });

    return clients
}

const updateCliente = async () => {
    const client = await Client.findOne({ idClient: 1 });
    console.log('cliente sin actualizar: ', client.dataValues);
    await client.update(
        { 
            name: 'clienteActulizado'
        },
        { 
            where: { idCliente: 1 }
        })
    console.log('cliente actualizado: ', client.dataValues);
}

const deleteClient = async () => {
    await Client.destroy({ where: {idClient: 1}});
}