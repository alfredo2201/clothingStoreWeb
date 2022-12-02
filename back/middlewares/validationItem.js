import { check, validationResult } from "express-validator"
const validateRegisterItem = async(req, res, next) =>{
    await check('name', 'invalid name').notEmpty().isLength({max: 60}).isString().run(req);
    await check('category', 'invalid category').notEmpty().isLength({max: 30}).isString().run(req);
    await check('size', 'invelid size').notEmpty().isLength({max: 3}).isIn(['S', 'M', 'L', 'XL']).isString().run(req);
    await check('price', 'invalid price').notEmpty().isNumeric().isFloat().run(req);
    await check('stock', 'invalid stock').notEmpty().isNumeric().isInt().run(req);

    let result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send(result);
    }
    next()
}

const validationUpdateItem = async(req, res, next) =>{
    await check('idItem', 'Invalid Client').notEmpty().isInt().run(req);
    await check('name', 'invalid name').optional().isLength({max: 60}).isString().run(req);
    await check('category', 'invalid category').optional().isLength({max: 30}).isString().run(req);
    await check('size', 'invalid size').optional().isLength({max: 3}).isIn(['S', 'M', 'XL', 'XXL']).isString().run(req);
    await check('price', 'invalid price').optional().isFloat().run(req);
    await check('stock', 'invalid stock').optional().isInt().run(req);
    let result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send(result);
    }
    next();
}

const validateidItem = async(req, res, next) =>{
    await check('idItem', 'invalid Item').notEmpty().isInt().run(req);
    let result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send(result);
    }
    next();
}

export default {
    validateRegisterItem,
    validationUpdateItem,
    validateidItem
}