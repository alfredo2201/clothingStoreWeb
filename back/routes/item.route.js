import { Router } from 'express';
import itemController from '../controllers/item.controller.js';
import { isAuthAdmin } from '../middlewares/isAuthAdmin.js';
import validationItem from '../middlewares/validationItem.js';
import multer from 'multer';
const router = Router();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//         // const extension = file.mimetype.split('/')[1];
//         cb(null, `${Date.now()}-${file.originalname}`)
//     }
// })

// const upload = multer({ storage: storage });

router.get('/items', itemController.findAllItems);
//itemController.upload.none()
router.get('/item/:idItem', validationItem.validateidItem, itemController.findOneItem);

router.get('/item/page/:page', itemController.findItemsForPage);
//upload.single('imgItem')
router.post('/item', isAuthAdmin, validationItem.validateRegisterItem, itemController.registerItem);
//isAdmin
router.put('/item/:idItem', isAuthAdmin, validationItem.validationUpdateItem, itemController.updateItem);
//isauthadmin
router.delete('/item/:idItem', isAuthAdmin, validationItem.validateidItem, itemController.deleteOneItem);

export default router;