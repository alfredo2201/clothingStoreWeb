import { Sale } from "../models/Sale.model.js";
import { Client } from "../models/Client.model.js";
import { where } from "sequelize";

const register = async (sale) => {
  if (!sale) return new Error("values are required");
  const { paymentMethod, total, idClient, idCard } = sale;
  await Sale.create({
    idClient,
    idCard,
    paymentMethod,
    total,
  }).then(() => "Sale successfully created")
  .catch(() => "Sale failed to create");
};

const findAll = async (value) => {
  if (!value) return new Error("values are required");
  const { idClient } = value;
  const sales = await Sale.findAll({
    attributes: ["paymentMethod", "total"],
    where: {
      idClient
    },
    include:{
        model: Client,
        as: "Client",
        attributes:["userName","email"],
        where:{
            idClient
        }
    }
  });
  return sales;
};

//busca por id
const findOne = async (value) => {
  if (!value) return new Error("Sale is required");
  const { idSale, idClient } = value;
  try {
    const sale = await Sale.findAll({
      where: {
        idSale: {
          [Op.eq]: idSale,
        },
        idClient,
      },
    });
    if (sale.length === 0) return sale;
  } catch (e) {
    return new Error("Sale not found");
  }
};

const deleteOne = async (value) => {
  if (!value) return new Error("Sale is required");
  const {idSale, idClient} = value
  await Sale.destroy({
    where: { 
        idSale,
        idClient
    },
  })
    .then("Sale deleted successfully")
    .catch(() => {
      throw new Error("Error deleting sale");
    });
};

const update = async (value) => {
  if (!value) return new Error("Sale is required");
  const {idSale} = value;
  const sale = await Sale.findOne({
    where: {
      idSale: {
        [Op.eq]: idSale,
      },
    },
  });
  if (!sale) return new Error("Sale not found");
  const { paymentMethod, total } = value;
  Sale.update({
    paymentMethod: paymentMethod,
    total: total,
  });
};

export { register, findAll, findOne, deleteOne, update };
