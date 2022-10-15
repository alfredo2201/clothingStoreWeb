import {Router} from 'express';
import clientController from '../controllers/client.controller.js'
const router = Router();

router.get('/client', clientController.findAllClients);
router.get('/client/:idClient', clientController.findOneClient);
router.post('/client', clientController.registerClient);
router.put('/client/:idClient', clientController.updateClient);
router.delete('/client/:idClient', clientController.deleteOneClient);

export default router;
