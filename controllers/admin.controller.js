import { Admin } from '../data/models/Admin.model.js';
import {
    deleteOne,
    findAll,
    findOne,
    register,
    update
} from '../data/repositories/admin.repository.js';

const registerAdmin = async (req, res) => {
    if (!req.body) {
        return res.status(400).send('Bad Request 1');
    }

    const { userName, name, lastName, email, password } = req.body;
    if (!userName || !name || !lastName || !email || !password) {
        return res.status(400).send('Bad Request 2');
    }

    const newAdmin = Admin.build({
        userName, name, lastName, email, password
    })
    
    await register(newAdmin);

    res.status(201).send('Administrador Creado');
}

const findAllAdmins = async (req, res) => {
    const admins = await findAll();
    if (!admins) {
        return res.send('Error');
    }
    res.send(admins);
}

const findOneAdmin = async (req, res) => {
    if (!req.body || !req.params) {
        return res.send('Error');
    }

    const { idAdmin } = req.params;
    //no tiene ningún parámetro para buscar
    if (!idAdmin) {
        return res.send('Error');
    }

    const admin = await findOne({ idAdmin});

    res.send(admin);
}

const deleteOneAdmin = async (req, res) => {
    if (!req.params) {
        return res.send('Error');
    }

    const { idAdmin } = req.params;
    if (!idAdmin) {
        return res.send('Error');
    }

    const admin = await findOne({ idAdmin });
    if (!admin) {
        return res.send('no existe');
    }

    const result = await deleteOne({ idAdmin });

    if (result === 0) {
        return res.send('no se eliminó nada');
    }

    res.send('admin eliminado');

}

const updateAdmin = async (req, res) => {
    if (!req.body || !req.params) {
        return res.send('Error 1');
    }

    const { idAdmin } = req.params;
    const data = req.body;

    const admin = await findOne(idAdmin);

    if(!admin){
        return res.send('Error Admin not Found 2');
    }

    const newAdmin = { ...admin.dataValues, ...data };

    const result = await update(newAdmin);

    if (result === 0) {
        return res.send('no se actualizó nada');
    }

    return res.send('admin actualizado');
}

export default {
    registerAdmin,
    findAllAdmins,
    findOneAdmin,
    deleteOneAdmin,
    updateAdmin,
};
