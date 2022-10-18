import { Item } from "../models/Item.model.js";

const register = async (value) => {
  if (!value) return new Error("Item is required");
  const { name, category, size, price, stock } = value;
  await Item.create({
    name,
    category,
    size,
    price,
    stock,
  })
    .then(() => "Item created successfully")
    .catch(() => "Item not created");
};

const findAll = async () => {
  const items = await Item.findAll({
    attributes:["name","category","size","price","stock"], 
  });
  return items;
};

//busca por category, id or size
const findOne = async (search) => {
  const { idItem } = search;
  // const item = await
  const item = await Item.findOne({ 
    attributes:["name","category","size","price","stock"], 
    where: { 
        idItem
    } 
});
  // const item = await Item.findOne({
  //     where: or({ idItem: search }, { size: search }, { category: search })
  // })
  return item;
};

const deleteOne = async (value) => {
  if (!value) return new Error("Value is required");
  const {idItem} = value;
  return await Item.destroy({
    where: {
      idItem,
    },
  });
};

const update = async (newData, idItem) => {
  if (!newData) return new Error("Values are required");
  const { name, category, size, price, stock } = newData;

  return await Item.update(
    {
      name,
      category,
      size,
      price,
      stock,
    },
    {
      where: { idItem },
    }
  );
};

export default {
  register,
  findAll,
  findOne,
  deleteOne,
  update,
};
