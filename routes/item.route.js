import { Router } from 'express';
import itemController from '../controllers/item.controller';

const router = Router();

router.get('/', itemController.findAllItems);

router.get('/:idItem', itemController.findOneItem);

router.post('/', itemController.registerItem);

router.put('/:idItem', itemController.updateItem);

router.delete('/:idItem', itemController.deleteOneItem);

export default router;