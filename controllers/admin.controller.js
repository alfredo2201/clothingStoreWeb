import { Admin } from "../data/models/Admin.model.js";
import {
  deleteOne,
  findAll,
  findOne,
  register,
  update,
} from "../data/repositories/admin.repository.js";

const registerAdmin = async (req, res, next) => {
  try {
    if (!req.body) {
      const error = new Error('Bad Request');
      error.httpStatusCode = 400;
      next(error);
      return;
    }

    const { userName, name, lastName, email, password } = req.body;
    
    if (!userName || !name || !lastName || !email || !password) {
      const error = new Error('Bad request');
      error.httpStatusCode = 400;
      next(error);
      return;
    }

    await register({userName, name, lastName, email, password});

    res.status(201).send("Administrador Creado");
  } catch (error) {
    next(error);
  }
}


const findAllAdmins = async (req, res, next) => {
  try {
    const admins = await findAll();
    if (!admins) {
      const error = new Error('admins not founds');
      error.httpStatusCode = 400;
      next(error);
      return;
    }
    res.send(admins);
  } catch (error) {
    res.send(error.message);
  }
}


const findOneAdmin = async (req, res, next) => {
  try {
    if (!req.body || !req.params) {
      const error = new Error('Bad Request');
      error.httpStatusCode = 400;
      next(error);
      return;
    }

    const { idAdmin } = req.params;
    //no tiene ningún parámetro para buscar
    if (!idAdmin) {
      const error = new Error('Admin not found');
      error.httpStatusCode = 400;
      next(error);
      return;
    }

    const admin = await findOne({ idAdmin });

    res.send(admin);
  } catch (error) {
    next(error);
  }
}

const deleteOneAdmin = async (req, res, next) => {
  try {
    if (!req.params) {
      const error = new Error('Bad Request');
      error.httpStatusCode = 400;
      next(error);
      return;
    }
    const { idAdmin } = req.params;
      if (!idAdmin) {
        const error = new Error('Bad Request');
        error.httpStatusCode = 400;
        next(error);
        return;
      }

      const admin = await findOne({ idAdmin });
      if (!admin) {
        const error = new Error('Admin not found');
        error.httpStatusCode = 400;
        next(error);
        return;
      }

      const result = await deleteOne({ idAdmin });

      if (result === 0) {
        const error = new Error('Admin not deleted');
        error.httpStatusCode = 400;
        next(error);
        return;
      }

      res.send("admin eliminado");
  } catch (error) {
    next(error)
  }
};

const updateAdmin = async (req, res, next) => {
  try {
    if (!req.body || !req.params) {
      const error = new Error('Bad Request');
      error.httpStatusCode = 400;
      next(error);
      return;
    }
  
    const { idAdmin } = req.params;
    const data = req.body;
  
    const admin = await findOne(idAdmin);
  
    if (!admin) {
      const error = new Error('Admin not found');
      error.httpStatusCode = 400;
      next(error);
      return;
    }
  
    const newAdmin = { ...admin.dataValues, ...data };
  
    const result = await update(newAdmin);
  
    if (result === 0) {
      const error = new Error('admin not updated');
      error.httpStatusCode = 400;
      next(error);
      return;
    }
  
    return res.send("admin actualizado");
  } catch (error) {
    next(error);
  }
};

export default {
  registerAdmin,
  findAllAdmins,
  findOneAdmin,
  deleteOneAdmin,
  updateAdmin,
};
