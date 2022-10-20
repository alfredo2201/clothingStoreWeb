import {check, validationResult} from "express-validator";

const validationRegisterCard = async(req, res) => {
    await check('nameOwner', 'invalid nameOwner').notEmpty().isLenght({max: 100}).isString().run(req);
    await check('cardNumber', 'card number must have max Lengh 16 without hyphen').notEmpty().isLenght({max: 16}).isString().run(req);
    await check('expirationDate', 'invalid expirationDate').notEmpty().isLenght({max: 4}).isString().run(req);

    let result = validationResult(req);

    if (!result.isEmpty()) {
       return res.send(result);
    }
    return res.send({msg: 'valid card'});
}

export default{
    validationRegisterCard
}