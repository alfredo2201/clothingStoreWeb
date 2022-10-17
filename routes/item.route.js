import { Router } from 'express';
import itemController from '../controllers/item.controller.js';

const router = Router();

router.get('/item', itemController.findAllItems);

router.get('/item/:idItem', itemController.findOneItem);

router.post('/item', itemController.registerItem);

router.put('/item/:idItem', itemController.updateItem);

router.delete('/item/:idItem', itemController.deleteOneItem);

export default router;