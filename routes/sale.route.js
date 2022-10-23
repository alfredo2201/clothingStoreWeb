import { Router } from 'express';
import saleController from '../controllers/sale.controller.js';
import { isAuthAdmin } from '../middlewares/isAuthAdmin.js';
import { isAuthClient } from '../middlewares/isAuthClient.js';
import validationSale from '../middlewares/validationSale.js';
const router = Router();

router.get('/sales', isAuthClient, saleController.findAllSales);

router.get('/sale', isAuthClient ,saleController.findOneSale);

router.post('/sale', isAuthClient,validationSale.validateRegisterSale, saleController.registerSale);

router.delete('/sale/:idSale', isAuthAdmin,  validationSale.validateidSale, saleController.deleteOneSale);

export default router;