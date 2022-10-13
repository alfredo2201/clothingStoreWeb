import {Admin} from '../models/Admin.model.js'

const register = async(admin) =>{
    if(!admin){
        console.log('error');
    }
    await Admin.create(admin);
}

const findAll = async() =>{
    const admins = await Admin.findAll();
    return admins;
}

const findOne = async(idAdmin) =>{
    if(!idAdmin){
        console.log('error');
    }
    const admin = await Admin.findOne({where: {idAdmin}});
    return admin;
}

const deleteOne = async(idAdmin) =>{
    return await Admin.destroy({where: {idAdmin}});
}

const update = async(newData) =>{
    const {idAdmin,userName ,name, lastName, email, password } = newData;
    return await Admin.update({
        userName, 
        name,
        lastName,
        email,
        password
    },
    {
        where: {idAdmin}
    }
    );
}

export {
    register,
    findAll,
    findOne,
    update,
    deleteOne
}