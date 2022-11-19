import  jwt  from "jsonwebtoken";
export const isAuthUser = async(req, res, next) => {
    try {
        let token = req.headers['x-acces-token'] || req.headers['autorizhation'];
        if(!token){
            return res.status(404).send({message: 'the user does not exist'});
        }

        if(token.startsWith('Bearer ')){
            token = token.slice(7, token.length);
        }

        if (token) {
            jwt.verify(token, process.env.SECRET_KEY_USER, (error, decode)=>{
                if(error){
                    return res.send({message: 'invalid token'});
                }
                req.decode = decode;
                next();
            }); 
        }
    } catch (error) {
        return res.status(400).send({message: 'token error'});
    }
}