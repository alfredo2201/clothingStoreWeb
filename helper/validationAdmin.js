import {check, validationResult} from "express-validator";

const validationRegisterAdmin = async(req, res, next) =>{

    await check('email', 'invalid email').isEmail().notEmpty().run(req);
    await check('name', 'invalid name').notEmpty().isLength({max: 30}).isString().run(req);
    await check('lastName', 'invalid lastname').notEmpty().isLength({max: 30}).isString().run(req);
    await check('userName', 'invalid userName').notEmpty().isLength({max: 50}).isString().run(req);
    await check('password','password must have min Length 8, 1 lowercase, 1 uppercase and 1 number').isLength({max: 150, min: 8}).run(req);


    let result = validationResult(req);
    if(!result.isEmpty()){
        //se envian los errores
        return res.send(result);
    }
    next()
}

export default {
    validationRegisterAdmin
}