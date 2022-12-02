import { Item } from "../data/models/Item.model.js";
import itemRepository from "../data/repositories/item.repository.js";
import { cloudinaryConfig } from "../cloudinary.js";
import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv';
dotenv.config();
dotenv.config({path: '.env'});


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})


const registerItem = async (req, res, next) => {
  try {
    const { name, category, size, price, stock} = req.body;
    const newItem = Item.build({
      name,
      category,
      size,
      price,
      stock,
    });


    const item = await itemRepository.register(newItem);
    console.log(item)
    if (!item) {
      const error = new Error("Item Bad request");
      error.httpStatusCode = 400;
      next(error);
      return;
    }

    res.status(201).send(item);
  } catch (error) {
    next(error);
  }
};

const uploadItemImg = async (req, res, next) => {
  try {
    const { idItem } = req.params;
    const item = await itemRepository.findOne({ idItem });
    if (!item) {
      const error = new Error("Item not found");
      error.httpStatusCode = 400;
      next(error);
    }
    const upload = await cloudinary.uploader.upload(req.file.path,{
      folder: 'imgItem'
    })
    const itemNewImage = await itemRepository.updateImgItem({img: upload.url, idItem})
    if(itemNewImage != 1){
      const error = new Error("Error to update item");
      error.httpStatusCode = 400;
      next(error);
    }
    return res.send({message: 'success'});
  } catch (error) {
    next(error);
  }
}

const findAllItems = async (req, res, next) => {
  try {
    const items = await itemRepository.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
};

const findItemsForPage = async (req, res, next) => {
  const perPage = 4;
  const { page } = req.params;
  const offSet = page * perPage - perPage;
  console.log("offset ->", offSet);
  try {
    const items = await itemRepository.findAllForPage({ offSet, perPage });
    if (!items) {
      const error = new Error("Item not fount");
      error.httpStatusCode = 400;
      next(error);
      return;
    }
    res.send(items);
  } catch (error) {
    next(error);
  }
};

const findOneItem = async (req, res, next) => {
  try {
    const { idItem } = req.params;
    //no tiene ningún parámetro para buscar
    const item = await itemRepository.findOne({ idItem });
    if (!item) {
      const error = new Error("Item not fount");
      error.httpStatusCode = 400;
      next(error);
      return;
    }
    res.send(item);
  } catch (error) {
    next(error);
  }
};

const deleteOneItem = async (req, res, next) => {
  try {
    const { idItem } = req.params;
    const item = await itemRepository.findOne({ idItem });
    if (!item) {
      const error = new Error("Item not found");
      error.httpStatusCode = 400;
      next(error);
    }

    const removedItem = await itemRepository.deleteOne({ idItem });

    if (removedItem === 0) {
      const error = new Error("Item not deleted");
      error.httpStatusCode = 400;
      next(error);
    }

    res.send({ message: "Deleted Item", item: item });
  } catch (error) {
    next(error);
  }
};

const updateItem = async (req, res, next) => {
  try {
    const { idItem } = req.params;
    const dataItem = req.body;

    const item = await itemRepository.findOne({ idItem });

    if (!item) {
      const error = new Error("Item Not Found");
      error.httpStatusCode = 400;
      next(error);
    }
    const newItem = { ...item.dataValues, ...dataItem };
    const itemUpdated = await itemRepository.update(newItem, idItem);

    if (itemUpdated === 0) {
      const error = new Error("Item not updated");
      error.httpStatusCode = 400;
      next(error);
    }
    return res.send({
      idItem: newItem.idITem,
      name: newItem.name,
      caregory: newItem.category,
      size: newItem.size,
      price: newItem.price,
      stock: newItem.stock,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  registerItem,
  findAllItems,
  findOneItem,
  deleteOneItem,
  updateItem,
  findItemsForPage,
  uploadItemImg,
  // upload
};
