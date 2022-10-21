import {check, validationResult} from "express-validator";

const validationRegisterCard = async(req, res, next) => {
    await check('nameOwner', 'invalid nameOwner').notEmpty().isLength({max: 100}).isString().run(req);
    await check('cardNumber', 'card number must have max Lengh 16 without hyphen').notEmpty().isLength({max: 16}).isString().run(req);
    await check('expirationDate', 'invalid expirationDate').notEmpty().isLength({max: 4}).isString().run(req);

    let result = validationResult(req);

    if (!result.isEmpty()) {
       return res.send(result);
    }
    next()
}

export default {
    validationRegisterCard
}