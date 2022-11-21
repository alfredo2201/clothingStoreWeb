import { Router } from 'express';
import cardController from '../controllers/card.controller.js';
import { isAuthClient } from '../middlewares/isAuthClient.js';
import validationCard from '../middlewares/validationCard.js';
import { isAuthAdmin } from '../middlewares/isAuthAdmin.js';
const router = Router();

router.get('/card', isAuthAdmin ,cardController.findAllCards);

router.get('/card/:idCard', isAuthClient,cardController.finOneCard);

router.post('/card',isAuthClient ,validationCard.validationRegisterCard, cardController.registerCard);

router.delete('/card', isAuthClient,validationCard.validateidCard ,cardController.deleteCard);

export default router;