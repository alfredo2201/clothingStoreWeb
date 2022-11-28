import { Item } from "../data/models/Item.model.js";
import itemRepository from "../data/repositories/item.repository.js";
import multer from 'multer'
import path from 'path'
// const storage = multer.diskStorage({
//   destination: function(req, file, cb){
//     cb(null, 'uploads')
//   },
//   filename: function(req, file, cb){
//     cb(null,  `${Date.now()}-${file.originalname}`)
//   }
// })
// const upload = multer({storage: storage})
// const upload = multer({storage: storage,
// limits: {fieldSize: '1000000'},
// fileFilter: (req, file, cb) =>{
//   const fileTypes = /jpeg|jpg|png|gif/;
//   const mimeType = fileTypes.test(file.mimetype)
//   const extName = fileTypes.test(path.extname(file.originalname))

//   if(mimeType && extName){
//     return cb(null, true);
//   }
//   cb('give proper files formate to upload')
// }
// });

const registerItem = async (req, res, next) => {
  try {
    const { name, category, size, price, stock, img } = req.body;
    const newItem = Item.build({
      name,
      category,
      size,
      price,
      stock,
      img
    });
    const item = await itemRepository.register(newItem);
    if(!item){
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
    const items = await itemRepository.findAllForPage({offSet,perPage});
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
  // upload
};
