import { Sale } from "../models/Sale.model.js";

const register = async (sale) => {
  if (!sale) return new Error("values are required");
  const { paymentMethod, total, idClient, idCard } = sale;
  await Sale.create({
    idClient,
    idCard,
    paymentMethod,
    total,
    include: { ItemSale },
  })
    .then(() => "Sale successfully created")
    .catch(() => "Sale failed to create");
};

const findAll = async (value) => {
  if (!value) return new Error("values are required");
  const { idClient } = value;
  const sales = await Sale.findAll({
    where: {
      idClient,
    },
    include: {
      model: Item,
    },
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
        idSale,
        idClient,
      },
      include: {
        model: Item,
      },
    });
    return sale;
  } catch (e) {
    return new Error("Sale not found");
  }
};

const deleteOne = async (value) => {
  if (!value) return new Error("Sale is required");
  const { idSale, idClient } = value;
  await Sale.destroy({
    where: {
      idSale,
      idClient,
    },
  })
    .then("Sale deleted successfully")
    .catch(() => {
      throw new Error("Error deleting sale");
    });
};

const update = async (value) => {
  if (!value) return new Error("Sale is required");
  const { idSale } = value;
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
