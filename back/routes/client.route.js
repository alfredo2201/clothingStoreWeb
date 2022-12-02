import {Router} from 'express';
import clientController from '../controllers/client.controller.js'
import { isAuthAdmin } from '../middlewares/isAuthAdmin.js';
import { isAuthClient } from '../middlewares/isAuthClient.js';
import validationClient from '../middlewares/validationClient.js';
import { uploads } from '../multer.js';

const router = Router();

router.get('/client', isAuthAdmin, clientController.findAllClients);
router.get('/client/:idClient', isAuthAdmin,validationClient.validateidClient, isAuthAdmin ,
    clientController.findOneClient);

router.post('/client',uploads.single('imgPerfil') ,validationClient.validationRegisterClient ,clientController.registerClient);

router.put('/client/:idClient', isAuthClient,validationClient.validationUpdateClient,clientController.updateClient);

router.delete('/client/:idClient', isAuthAdmin, validationClient.validateidClient ,clientController.deleteOneClient);

export default router;
