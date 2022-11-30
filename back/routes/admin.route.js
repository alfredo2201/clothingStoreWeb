import { Router } from 'express';
import { isAuthAdmin } from '../middlewares/isAuthAdmin.js';
import adminController from '../controllers/admin.controller.js';
import validationAdmin from '../middlewares/validationAdmin.js';
const router = Router();

router.get('/admin',isAuthAdmin, adminController.findAllAdmins);

router.post('/admin',isAuthAdmin,validationAdmin.validationRegisterAdmin ,adminController.registerAdmin)

router.get('/admin/:idAdmin',isAuthAdmin, adminController.findOneAdmin);

router.put('/admin/:idAdmin',isAuthAdmin, validationAdmin.validationUpdateAdmin, adminController.updateAdmin);

router.delete('/admin/:idAdmin',isAuthAdmin, validationAdmin.validateidAdmin, adminController.deleteOneAdmin);

export default router;