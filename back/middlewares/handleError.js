
export const handleError = (error, req, res, next)=>{
    return res.status(error.httpStatusCode || 500).json({message: error.message});   
    next();
}