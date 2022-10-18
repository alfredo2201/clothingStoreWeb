import { Sale } from "../data/models/Sale.model.js";
import {
  deleteOne,
  findAll,
  findOne,
  register,
  update,
} from "../data/repositories/Sale.repository.js";

const registerSale = async (req, res, next) => {
  try {
    if (!req.body) {
      const error = new Error('Bad Request');
      error.httpStatusCode = 400;
      next(error);
      return;
    }

    const { paymentMethod, total, idClient, idCard } = req.body;

    if (!paymentMethod || !total || !idClient || !idCard) {
      const error = new Error('Error');
      error.httpStatusCode = 400;
      next(error);
      return;
    }

    await register({ paymentMethod, total, idClient, idCard });

    res.status(201).send("Sale was created");
  } catch (error) {
    res.send(error.message);
  }
};

const findAllSales = async (req, res, next) => {
  try {
    if (!req.body) {
      const error = new Error("Bad request");
      error.httpStatusCode = 400;
      next(error);
      return;
    }
    const {idClient} = req.body;
    const sales = await findAll({idClient});
    if (!sales) {
      const error = new Error('Error');
      error.httpStatusCode = 400;
      next(error);
      return;
    }
    res.send(sales);
  } catch (error) {
    next(error.message);
  }
};

const findOneSale = async (req, res, next) => {
  try{
    if (!req.body || !req.params) {
      const error = new Error('Sale not found');
      error.httpStatusCode = 400;
      next(error);
      return;
    }

    const { idSale } = req.params;
    //no tiene ningún parámetro para buscar
    if (!idSale) {
      const error = new Error('Sale not found');
      error.httpStatusCode = 400;
      next(error);
      return;
    }

    const sale = await findOne({ idSale });

    res.send(sale);
  } catch (error) {
    next(error);
  }
}

const deleteOneSale = async (req, res, next) => {
  try {
    if (!req.params) {
      const error = new Error('Bad request');
      error.httpStatusCode = 400;
      next(error);
      return;
    }

    const { idSale } = req.params;
    if (!idSale) {
      const error = new Error('Sale not found');
      error.httpStatusCode = 400;
      next(error);
      return;
    }

    const sale = await findOne(idSale);
    if (!sale) {
      const error = new Error('Sale not found');
      error.httpStatusCode = 400;
      next(error);
      return;
    }

    const result = await deleteOne(idSale);

    if (result === 0) {
      const error = new Error('Sale not deleted');
      error.httpStatusCode = 400;
      next(error);
      return;
    }

    res.send({ message: 'Sale was deleted' });
  } catch (error) {
    next(error.message);
  }
};

export default {
  registerSale,
  findAllSales,
  findOneSale,
  deleteOneSale,
};
