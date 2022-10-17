import { Card } from "../models/Card.model.js";

const register = async (value) => {
  if (!value) return new Error("Values are required");
  const { nameOwner, cardNumber, expirationDate, idClient } = value;
  const cardCreated = Card.build({
    idClient,
    nameOwner,
    cardNumber,
    expirationDate,
  });
  return await cardCreated
    .save()
    .then(() => cardCreated.dataValues)
    .catch(() => "Card failed to save");
};

const update = async (value) => {
  if (!value) return new Error("Values are required");
  const card = await Card.findOne({
    where: {
      idCard: {
        [Op.eq]: value.idCard,
      },
    },
  });
  if (!card) return new Error("Values are required");
  const { nameOwner, cardNumber, expirationDate } = value;
  Card.update({
    nameOwner,
    cardNumber,
    expirationDate,
  });
};

const deleteOne = async (value) => {
  if (!value) return new Error("Values are required");
  const {idCard, idClient} = value;
  return await Card.destroy({
    where: { 
      idCard: idCard,
      idClient: idClient
    },
  })
    .then("Card deleted successfully")
    .catch(() => {
      throw new Error("Error deleting Card");
    });
};

const findOne = async (value) => {
  if (!value) return new Error("values are required");
  const { idCard } = value;
  try {
    const card = await Card.findOne({
      attributes: ["nameOwner", "cardNumber", "expirationDate"],
      where: {
        idCard: idCard,
      },
    });
    return card;
  } catch (e) {
    throw new Error("Card not found");
  }
};

const findAll = async (value) => {
  if (!value) return new Error("values are required");
  const {idClient} = value
  const results = await Card.findAll({
    attributes: ["nameOwner", "cardNumber", "expirationDate"],
    where: {
      idClient: idClient,
    },
  });
  return results;
};

export default {
  register,
  update,
  deleteOne,
  findOne,
  findAll,
};
