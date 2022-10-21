import { check, validationResult } from "express-validator"
const validateRegisterItem = async(req, res, next) =>{
    await check('name', 'invalid name').notEmpty().isLength({max: 60}).isString().run(req);
    await check('category', 'invalid category').notEmpty().isLength({max: 30}).isString().run(req);
    await check('size', 'invelid size').notEmpty().isLength({max: 3}).isString().run(req);
    await check('price', 'invalid price').notEmpty().isNumeric().isFloat().run(req);
    await check('stock', 'invalid stock').notEmpty().isNumeric().isInt().run(req);

    let result = validationResult(req);
    if(!result.isEmpty()){
        //se envian los errores
        return res.send(result);
    }
    next()
}

export default {
    validateRegisterItem
}