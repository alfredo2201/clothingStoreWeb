import {Router} from 'express';
import itemSaleController from '../controllers/itemSale.controller.js';
import { isAuthClient } from '../middlewares/isAuthClient.js';

const router = Router();

router.get('/itemSale', isAuthClient ,itemSaleController.findAllItemSale);

router.get('/itemSale/:idItemSale' , isAuthClient,itemSaleController.findOneItemSale);

router.post('/itemSale',isAuthClient,itemSaleController.registerItemSale);

router.delete('/itemSale/:idItemSale', isAuthClient, itemSaleController.deleteOneItemSale);

export default router;