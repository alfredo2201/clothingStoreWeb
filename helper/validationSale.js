import {check, validationResult} from 'express-validator';

const validateRegisterSale = async(req, res) => {
    await check('payMethod', 'invalid payMethod').notEmpty().isLength({max:50}).isString().run(req);
    await check('total', 'invalid total').notEmpty().isNumeric().isFloat().run(req);

    let result = validationResult(req);
    if(!result.isEmpty()){
        return res.send(result);
    }
    return res.send({msg: 'valid sale'});
}

export default {
    validateRegisterSale
}