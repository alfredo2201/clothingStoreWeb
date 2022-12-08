import { Router } from 'express';
import itemController from '../controllers/item.controller.js';
import { isAuthAdmin } from '../middlewares/isAuthAdmin.js';
import validationItem from '../middlewares/validationItem.js';
import { uploads } from '../multer.js';
// import multer from 'multer';
const router = Router();

router.get('/items', itemController.findAllItems);
router.get('/items/:category',validationItem.validateidItem,itemController.findAllItemsByCategory);
//itemController.upload.none()
router.get('/item/:idItem', validationItem.validateidItem, itemController.findOneItem);

router.get('/item/page/:page', itemController.findItemsForPage);
//upload.single('imgItem') isAuthAdmin
router.post('/item',isAuthAdmin,uploads.single('imgItem') ,validationItem.validateRegisterItem, itemController.registerItem);

router.patch('/item/upload/:idItem' ,uploads.single('imgItem'), itemController.uploadItemImg)
//isAdminm
router.put('/item/:idItem', isAuthAdmin, validationItem.validationUpdateItem, itemController.updateItem);
//isauthadmin
router.delete('/item/:idItem', isAuthAdmin, validationItem.validateidItem, itemController.deleteOneItem);

export default router;