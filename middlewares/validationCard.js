import {check, validationResult} from "express-validator";

// const VALIDDATE =  /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
const VALIDATE_EXPIRATION = /(0[1-9]|1[012])(\/)[0-9]{2}/;
const validationRegisterCard = async(req, res, next) => {
    await check('nameOwner', 'invalid nameOwner').notEmpty().isLength({max: 100}).isString().run(req);
    await check('cardNumber', 'card number must have Lengh 16').notEmpty().isLength({max: 16}).isString().isNumeric().run(req);
    await check('expirationDate', 'invalid expirationDate').notEmpty().isLength({max: 5}).isString().matches(VALIDATE_EXPIRATION).run(req);

    let result = validationResult(req);

    if (!result.isEmpty()) {
        return res.status(400).send(result);
    }
    next()
}


const validateidCard = async(req, res, next) =>{
    await check('idCard', 'invalid Card').notEmpty().isInt().run(req);
    let result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).send(result);
    }
    next();
}

export default {
    validationRegisterCard,
    validateidCard
}