import { Item } from "../models/Item.model.js";

const register = async (value) => {
  if (!value) return new Error("Item is required");
  const { name, category, size, price, stock } = value;
  return await Item.create({
    name,
    category,
    size,
    price,
    stock,
  }, {
    returning: true
  }
  );
};

const findAll = async () => {
  const items = await Item.findAll({
    attributes: ["idItem", "name", "category", "size", "price", "stock"],
  });
  return items;
};

const findAllForPage = async (pages) => {
  const {perPage,offSet} = pages;
  const items = await Item.findAll({
    attributes: ["idItem", "name", "category", "size", "price", "stock"],
    offset: offSet,
    limit: perPage,
  });
  const count = await Item.count()
  return {items,count};
};


//busca por category, id or size
const findOne = async (search) => {
  const { idItem } = search;
  // const item = await
  const item = await Item.findOne({
    attributes: ["idItem", "name", "category", "size", "price", "stock"],
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
  const { idItem } = value;
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
  findAllForPage
};
