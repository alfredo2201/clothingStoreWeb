import {Router} from 'express';
import authController from '../data/repositories/auth.controller.js';
import { isAuthClient } from '../middlewares/isAuthClient.js';
import { isAuthAdmin } from '../middlewares/isAuthAdmin.js';
const router = Router();

router.post('/login',authController.login);

router.get('/info', isAuthClient, authController.info);

router.get('/adminInfo', isAuthAdmin, authController.info);

export default router;