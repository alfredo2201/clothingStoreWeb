import { Router } from 'express';
import itemController from '../controllers/item.controller.js';
import { isAuthAdmin } from '../middlewares/isAuthAdmin.js';
import validationItem from '../middlewares/validationItem.js';
const router = Router();

router.get('/items', itemController.findAllItems);

router.get('/item/:idItem', validationItem.validateidItem,itemController.findOneItem);

router.get('/item/page/:page',itemController.findItemsForPage);

router.post('/item', isAuthAdmin,validationItem.validateRegisterItem ,itemController.registerItem);
//isAdmin
router.put('/item/:idItem', isAuthAdmin,validationItem.validationUpdateItem ,itemController.updateItem);
//isauthadmin
router.delete('/item/:idItem', isAuthAdmin,validationItem.validateidItem,itemController.deleteOneItem);

export default router;