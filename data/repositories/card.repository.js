import Card from "../models/Card.model.js";

const register = async (value) =>{
    if (!value) return new Error("Values are required");
    const {nameOwner,cardNumber,expirationDate} = value;
    const cardCreated = Card.build({
        nameOwner,
        cardNumber,
        expirationDate
    })
    await cardCreated
    .save()
    .then(() => "Card successfully saved")
    .catch(() => "Card failed to save");
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
    const {nameOwner,cardNumber,expirationDate} = value;
    Card.update({
        nameOwner,
        cardNumber,
        expirationDate
    });
  };
  
  const deleteOne = async (value) => {
    if (!value) return new Error("Values are required");
    await Card.destroy({
      where: { idCard: value.idCard },
    })
      .then("Card deleted successfully")
      .catch(() => {
        throw new Error("Error deleting Card");
      });
  };
  
  const findOne = async (value) => {
    if (!value) return new Error("values ​​are required");
    const { idCard,idClient } = value;
    try {
      const card = await Card.findAll({
        where: {
          idCard: idCard,
          idClient: idClient
        },
      });
      if (card.length > 0) return card;
    } catch (e) {
      throw new Error("Card not found");
    }
  };
  export {
    register,
    update,
    deleteOne,
    findOne
};