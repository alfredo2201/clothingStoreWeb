import { Card } from "../models/Card.model.js";

const register = async (value) => {
  const { nameOwner, cardNumber, expirationDate, idClient } = value;
  await Card.create({
    nameOwner, cardNumber, expirationDate,
    idClient
  });
  // if (!value) return new Error("Values are required");
  // const { nameOwner, cardNumber, expirationDate } = value;
  // const cardCreated = Card.build({
  //   nameOwner,
  //   cardNumber,
  //   expirationDate
  // })
  // await cardCreated
  //   .save()
  //   .then(() => "Card successfully saved")
  //   .catch(() => "Card failed to save");
}

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
    expirationDate
  });
};

const deleteOne = async (value) => {
  // if (!value) return new Error("Values are required");
  return await Card.destroy({
    where: { idCard: value.idCard },
  })
  // .then("Card deleted successfully")
  // .catch(() => {
  //   throw new Error("Error deleting Card");
  // });
};

const findOne = async (value) => {
  // if (!value) return new Error("values ​​are required");
  const { idCard } = value;
  try {
    const card = await Card.findOne({
      where: {
        idCard: idCard,
      },
    });
    return card;
  } catch (e) {
    throw new Error("Card not found");
  }
};

const findAll = async () => {
  return await Card.findAll();
}

export default {
  register,
  update,
  deleteOne,
  findOne,
  findAll
};