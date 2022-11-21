import {Router} from 'express';
import itemSaleController from '../controllers/itemSale.controller.js';
import { isAuthClient } from '../middlewares/isAuthClient.js';
import validationItemSale from '../middlewares/validationItemSale.js';

const router = Router();

router.get('/itemSale', isAuthClient ,itemSaleController.findAllItemSale);

router.get('/itemSale/:idItemSale' , isAuthClient,itemSaleController.findOneItemSale);

router.post('/itemSale' ,isAuthClient, validationItemSale.validateidItemSale, itemSaleController.registerItemSale);

router.put('/itemSale', isAuthClient, validationItemSale.validationUpdateItemSale, itemSaleController.updateItemSale);

router.delete('/itemSale/:idItemSale', isAuthClient, validationItemSale.validateidItemSale, itemSaleController.deleteOneItemSale);

export default router;