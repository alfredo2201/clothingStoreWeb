import { Sale } from "../data/models/Sale.model.js";
import {
  deleteOne,
  findAll,
  findOne,
  register,
  update,
} from "../data/repositories/Sale.repository.js";

const registerSale = async (req, res) => {
  try {
    if (!req.body) {
      const error = new Error("Bad request");
      error.httpStatusCode = 400;
      next(error);
    }

    const { paymentMethod, total, idClient, idCard } = req.body;

    if (!paymentMethod || !total || !idClient || !idCard) {
      const error = new Error("Bad request");
      error.httpStatusCode = 400;
      next(error);
    }

    await register({ paymentMethod, total, idClient, idCard });

    res.status(201).send("Cliente Creado");
  } catch (error) {
    res.send(error.message);
  }
};

const findAllSales = async (req, res) => {
  try {
    if (!req.body) {
      const error = new Error("Bad request");
      error.httpStatusCode = 400;
      next(error);
    }
    const {idClient} = req.body;
    const sales = await findAll({idClient});
    if (!sales) {
      return res.send("Error");
    }
    res.send(sales);
  } catch (error) {
    res.send(error.message);
  }
};

const findOneSale = async (req, res) => {
  if (!req.body || !req.params) {
    return res.send("Error");
  }

  const { idSale } = req.params;
  //no tiene ningún parámetro para buscar
  if (!idSale) {
    return res.send("Error");
  }

  const sale = await findOne({ idSale });

  res.send(sale);
};

const deleteOneSale = async (req, res) => {
  try {
    if (!req.params) {
      return res.send("Error");
    }

    const { idSale } = req.params;
    if (!idSale) {
      return res.send({ message: "error" });
    }

    const sale = await findOne(idSale);
    if (!sale) {
      return res.send({ message: "sale Not Found" });
    }

    const result = await deleteOne(idSale);

    if (result === 0) {
      return res.send("sale Not Deleted");
    }

    res.send({ message: "Deleted sale" });
  } catch (error) {
    res.send(error.message);
  }
};

export default {
  registerSale,
  findAllSales,
  findOneSale,
  deleteOneSale,
};
