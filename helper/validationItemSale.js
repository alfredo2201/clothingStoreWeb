import{check, validationResult} from "express-validator";

const validationRegisterItemSale = async(req, res,next) =>{
    await check('amount', 'invalid amount').notEmpty().isNumeric().isInt().run(req);

    let result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send(result);
    }
    next()
}

export default{
    validationRegisterItemSale
}