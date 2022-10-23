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
    const { paymentMethod, total, idClient, idCard, item } = req.body;
    const sale = await register({ paymentMethod, total, idClient, idCard , item});
    res.status(201).send(sale);
  } catch (error) {
    next(error);
  }
};

const findAllSales = async (req, res, next) => {
  try {
    const {idClient} = req.body;
    const sales = await findAll({idClient});
    if (!sales) {
      const error = new Error('Sales not found');
      error.httpStatusCode = 400;
      next(error);
      return;
    }
    res.status(200).send(sales);
  } catch (error) {
    next(error.message);
  }
};

const findOneSale = async (req, res, next) => {
  try{
    const { idSale, idClient } = req.body;
    const sale = await findOne({ idSale, idClient });
    res.status(200).send(sale);
  } catch (error) {
    next(error.message);
  }
}

const deleteOneSale = async (req, res, next) => {
  try {
    const { idSale, idClient } = req.body;
    const sale = await findOne(idSale);
    if (!sale) {
      const error = new Error('Sale not found');
      error.httpStatusCode = 400;
      next(error);
      return;
    }
    const oneSale = await deleteOne({idClient, idSale});

    if (oneSale === 0) {
      const error = new Error('Sale not deleted');
      error.httpStatusCode = 400;
      next(error);
      return;
    }
    res.status(201).send({ message: 'Sale was deleted' });
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
