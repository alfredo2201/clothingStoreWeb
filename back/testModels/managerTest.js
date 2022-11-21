import {Admin} from '../data/models/Admin.model.js';
import {findAll, findOne, deleteOne, register, update} from '../data/repositories/admin.repository.js';

export const ejecuteManagerTest =async () =>{
    console.log('Se crean los Manager');
    await createManager()

    const managers = await getAllManagers();
    managers.map(m => console.log(m.dataValues));

    console.log('Actualizar manager con id 1');
    await updateManager();

    console.log('Se elimina el manager con id 1');
    await deleteManager();

    console.log('Managers restantes');
    const managers2 = await getAllManagers();
    managers2.map(m => console.log(m.dataValues));
}

const createManager = async() =>{
    await register({
        userName: 'admin1',
        name: 'man1',
        lastName: 'm1',
        email: 'admin@gmail.com',
        password: 'askjdnaksjdnasjkd'
    });

    await register({
        userName: 'admin2',
        name: 'man2',
        lastName: 'm2',
        email: 'admin2@gmail.com',
        password: 'askjdnaksjdnasjkd'
    });
}

const getAllManagers = async() =>{
    const managers = await findAll({
        attributes: ['userName', 'name', 'lastName', 'email']
    });
    return managers;
}

const updateManager = async()=>{
    const manager = await findOne(1);
    console.log('Manager antes de actualizar: ', manager.dataValues);
    manager.name = 'manager actualizado'
    update(manager);
    console.log('Manager actualizado: ', manager.dataValues);
}

const deleteManager = async() =>{
    await deleteOne(1);
}