import {Admin} from '../data/models/Manager.model.js'

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
    await Admin.create({
        userName: 'Manager1',
        name: 'man1',
        lastName: 'm1',
        email: 'manager@gmail.com',
        password: 'askjdnaksjdnasjkd'
    });

    await Admin.create({
        userName: 'Manager2',
        name: 'man2',
        lastName: 'm2',
        email: 'manager2@gmail.com',
        password: 'askjdnaksjdnasjkd'
    });
}

const getAllManagers = async() =>{
    const managers = await Admin.findAll({
        attributes: ['userName', 'name', 'lastName', 'email']
    });
    return managers;
}

const updateManager = async()=>{
    const manager = await Admin.findOne({
        where: {idManager: 1}
    });
    console.log('Manager antes de actualizar: ', manager.dataValues);
    manager.update({
        name: 'manager actualizado'
    })
    console.log('Manager actualizado: ', manager.dataValues);
}

const deleteManager = async() =>{
    await Admin.destroy({where: {idManager:1}})
}