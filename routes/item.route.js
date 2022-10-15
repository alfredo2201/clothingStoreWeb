import { Router } from 'express';
import itemController from '../controllers/item.controller.js';

const router = Router();

router.get('/card', itemController.findAllItems);

router.get('/card/:idCard', itemController.findOneItem);

router.post('/card', itemController.registerItem);

router.put('/card/:idCard', itemController.updateItem);

router.delete('/card/:idCard', itemController.deleteOneItem);

export default router;