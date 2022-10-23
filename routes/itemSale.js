import {Router} from 'express';
import itemSaleController from '../controllers/itemSale.controller.js';
import { isAuthClient } from '../middlewares/isAuthClient.js';
import validationItemSale from '../helper/validationItemSale.js';

const router = Router();

router.get('/itemSale', isAuthClient ,itemSaleController.findAllItemSale);

router.get('/itemSale/:idItemSale' , isAuthClient,itemSaleController.findOneItemSale);

//router.post('/itemSale', validationItemSale.validationRegisterItemSale , isAuthClient,itemSaleController.registerItemSale);
router.post('/itemSale' ,itemSaleController.registerItemSale);

router.delete('/itemSale/:idItemSale', isAuthClient, itemSaleController.deleteOneItemSale);

export default router;