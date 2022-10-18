import {Router} from 'express';
import clientController from '../controllers/client.controller.js'
import { isAuthAdmin } from '../middlewares/isAuthAdmin.js';
import { isAuthClient } from '../middlewares/isAuthClient.js';
const router = Router();

router.get('/client', isAuthAdmin, clientController.findAllClients);
router.get('/client/:idClient', isAuthAdmin ,clientController.findOneClient);
router.post('/client', clientController.registerClient);
router.put('/client/:idClient', isAuthClient, clientController.updateClient);
router.delete('/client/:idClient', isAuthAdmin, clientController.deleteOneClient);

export default router;
