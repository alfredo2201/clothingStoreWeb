import{check, validationResult} from "express-validator";

const validationRegisterItemSale = async(req, res) =>{
    await check('price', 'invalid price').notEmpty().isNumeric().isFloat().run(req);
    await check('amount', 'invalid amount').notEmpty().isNumeric().isInt().run(req);

    let result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send(result);
    }
    return res.send({msg: 'valid itemSale'});
}

export default{
    validationRegisterItemSale
}