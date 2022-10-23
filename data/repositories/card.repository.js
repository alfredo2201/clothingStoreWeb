import { Card } from "../models/Card.model.js";

const register = async (value) => {
  const { nameOwner, cardNumber, expirationDate, idClient, lastCardNumbers} = value;
  const cardCreated = await Card.create({
    idClient,
    nameOwner,
    cardNumber,
    expirationDate,
    lastCardNumbers
  },{
    returning: true
  });
  return cardCreated;
};

const update = async (value) => {
  const card = await Card.findOne({
    where: {
      idCard: {
        [Op.eq]: value.idCard,
      },
    },
  });
  if (!card) return new Error("Values are required");
  const { nameOwner, cardNumber, expirationDate } = value;
  const cardUpdated = await Card.update({
    nameOwner,
    cardNumber,
    expirationDate,
  }, {
    returning: true,
  });
};

const deleteOne = async (value) => {
  const {idCard, idClient} = value;
  return await Card.destroy({
    where: { 
      idCard: idCard,
      idClient: idClient
    },
  })
};

const findOne = async (value) => {
  const { idCard } = value;
    const card = await Card.findOne({
      attributes: ["nameOwner", "cardNumber", "expirationDate"],
      where: {
        idCard: idCard,
      },
    });
    return card;
};

const findAll = async (value) => {
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
