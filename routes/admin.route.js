import { Router } from 'express';
import adminController from '../controllers/admin.controller.js';
const router = Router();

router.get('/admin', adminController.findAllAdmins);

router.get('/admin/:idAdmin', adminController.findOneAdmin);

router.post('/admin', adminController.registerAdmin);

router.put('/admin/:idAdmin', adminController.updateAdmin);

router.delete('/admin/:idAdmin', adminController.deleteOneAdmin);

export default router;