
export const handleError = (error, req, res, next)=>{
    res.status(error.httpStatusCode || 500).json({message: error.message});   
    // return;
    next();
}