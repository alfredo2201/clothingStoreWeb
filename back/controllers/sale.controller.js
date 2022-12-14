import {
  deleteOne,
  findAll,
  findOne,
  register
} from "../data/repositories/Sale.repository.js";
import * as ItemSale from "../data/repositories/itemSales.repository.js";
import Stripe from "stripe";
import { Sale } from "../data/models/Sale.model.js";

const stripe = new Stripe(process.env.STRIPE);

const registerSale = async (req, res, next) => {
  try {
    const { idStripe, paymentMethod, items, idClient, brand, card } = req.body;

    let total = 0

    items.map(it => {
      total += it.quantity * it.price
    })
    console.log(total);
    const newSale = {
      paymentMethod,
      total,
      idClient,
      brand,
      card
    }

    const sale = await register(newSale);

    items.map(it =>
      ItemSale.register({
        price: it.price,
        amount: it.quantity,
        idSale: sale.dataValues.idSale,
        idItem: it.id,
      })
    )

    const r = await stripe.paymentIntents.create({
      amount: total*100,
      currency: "USD", 
      payment_method: idStripe,
      confirm: true,
    })

    res.status(201).send({ message: 'sucessful' });
  } catch (error) {
    next(error);
    console.log(error.message);
  }
};

const findAllSales = async (req, res, next) => {
  try {
    const { idClient } = req.body;
    const sales = await findAll({ idClient });
    if (!sales) {
      const error = new Error("Sales not found");
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
  try {
    const { idSale, idClient } = req.body;
    const sale = await findOne({ idSale, idClient });
    res.status(200).send(sale);
  } catch (error) {
    next(error.message);
  }
};

const deleteOneSale = async (req, res, next) => {
  try {
    const { idSale, idClient } = req.body;
    const sale = await findOne(idSale);
    if (!sale) {
      const error = new Error("Sale not found");
      error.httpStatusCode = 400;
      next(error);
      return;
    }
    const oneSale = await deleteOne({ idClient, idSale });

    if (oneSale === 0) {
      const error = new Error("Sale not deleted");
      error.httpStatusCode = 400;
      next(error);
      return;
    }
    res.status(201).send({ message: "Sale was deleted" });
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
