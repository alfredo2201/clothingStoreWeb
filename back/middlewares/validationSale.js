import {check, validationResult} from 'express-validator';

const validateRegisterSale = async(req, res, next) => {
    await check('paymentMethod', 'invalid payMethod').notEmpty().isLength({max:50}).isString().run(req);    
    
    let result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send(result);
    }
    next()
}

const validateidSale = async(req, res, next) =>{
    await check('idSale', 'invalid sale').notEmpty().isInt().run(req);
    let result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send(result);
    }
    next();
}

export default {
    validateRegisterSale,
    validateidSale
}