import * as ClientRepo from "../data/repositories/client.repository.js"


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
    await ClientRepo.register({
        userName: 'comprador',
        name: "client1",
        lastName: "lastname1",
        address: 'my house',
        email: 'email@email.com',
        password: 'akjsdna'
    });

    await ClientRepo.register({
        userName: 'comprador2',
        name: "client2",
        lastName: "lastname2",
        address: 'my house2',
        email: 'email2@email.com',
        password: 'askjdnakjsd'
    })

    await ClientRepo.register({
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
    return ClientRepo.findAll();
}

const updateCliente = async () => {
    const client = await ClientRepo.findOne({ idClient: 2 });
    console.log('cliente sin actualizar: ', client.dataValues);    
    await ClientRepo.update(client.dataValues)
    console.log('cliente actualizado: ', client.dataValues);
}

const deleteClient = async () => {
    //await ClientRepo.deleteOne({idClient: 1});
}