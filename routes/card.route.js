import { Router } from 'express';
import cardController from '../controllers/card.controller.js';
import { isAuthClient } from '../middlewares/isAuthClient.js';
import validationCard from '../helper/validationCard.js'
const router = Router();

router.get('/card', isAuthClient ,cardController.findAllCards);

router.get('/card/:idCard', isAuthClient,cardController.finOneCard);

//router.post('/card', validationCard.validationRegisterCard, isAuthClient, cardController.registerCard);
router.post('/card', validationCard.validationRegisterCard, cardController.registerCard);

router.put('/card/:idCard', isAuthClient ,cardController.updateCard);

router.delete('/card', isAuthClient, cardController.deleteCard);

export default router;