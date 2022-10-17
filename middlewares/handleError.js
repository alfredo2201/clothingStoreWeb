
export const handleError = (error, req, res, next)=>{
    // res.sendStatus(error.httpStatusCode).json(error);
    res.status(error.httpStatusCode).send(error.message);
    next();
}