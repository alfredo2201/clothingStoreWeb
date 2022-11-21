import{check, validationResult} from "express-validator";

const validationRegisterItemSale = async(req, res,next) =>{
    await check('amount', 'invalid amount').notEmpty().isNumeric().isInt().run(req);

    let result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).send(result);
    }
    next()
}

const validationUpdateItemSale = async(req, res, next) =>{
    await check('idItemSale', 'Invalid idItemSale').notEmpty().isInt().run(req);
    await check('price', 'invalid price').optional().isFloat().run(req);
    await check('amount', 'invalid amount').optional().isInt().run(req);
    let result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send(result);
    }
    next();
}

const validateidItemSale = async(req, res, next) =>{
    await check('idItemSale', 'invalid idItemSale').notEmpty().isInt().run(req);
    let result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send(result);
    }
    next();
}

export default{
    validationRegisterItemSale,
    validationUpdateItemSale,
    validateidItemSale
}