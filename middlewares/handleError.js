
export const handleError = (error, req, res, next)=>{
    res.json({message: error.message});   
    next();
}