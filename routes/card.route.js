import { Router } from 'express';
import cardController from '../controllers/card.controller.js';
const router = Router();

router.get('/card', cardController.findAllCards);

router.get('/card/:idCard', cardController.finOneCard);

router.post('/card', cardController.registerCard);

router.put('/card/:idCard', cardController.updateCard);

router.delete('/card', cardController.deleteCard);

export default router;