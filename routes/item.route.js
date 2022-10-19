import { Router } from 'express';
import itemController from '../controllers/item.controller.js';
import { isAuthAdmin } from '../middlewares/isAuthAdmin.js';
import validationItem from '../helper/validationItem.js';
const router = Router();

router.get('/item', itemController.findAllItems);

router.get('/item/:idItem', itemController.findOneItem);

// router.post('/item', isAuthAdmin ,itemController.registerItem);
router.post('/item', validationItem.validateRegisterItem ,itemController.registerItem);

router.put('/item/:idItem', isAuthAdmin ,itemController.updateItem);

router.delete('/item/:idItem', isAuthAdmin,itemController.deleteOneItem);

export default router;