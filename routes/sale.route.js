import { Router } from 'express';
import saleController from '../controllers/sale.controller.js';
const router = Router();

router.get('/sale', saleController.findAllSales);

router.get('/sale/:idSale', saleController.findOneSale);

router.post('/sale', saleController.registerSale);

router.delete('/sale/:idSale', saleController.deleteOneSale);

export default router;