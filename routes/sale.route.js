import { Router } from 'express';
import saleController from '../controllers/sale.controller.js';
import { isAuthAdmin } from '../middlewares/isAuthAdmin.js';
import { isAuthClient } from '../middlewares/isAuthClient.js';
import validationSale from '../helper/validationSale.js'
const router = Router();

router.get('/sales', isAuthClient,saleController.findAllSales);

router.get('/sale', isAuthClient ,saleController.findOneSale);

//router.post('/sale', validationSale.validateRegisterSale, isAuthClient ,saleController.registerSale);
router.post('/sale', validationSale.validateRegisterSale, saleController.registerSale);

router.delete('/itemSale/:idItemSale', isAuthAdmin ,saleController.deleteOneSale);

export default router;