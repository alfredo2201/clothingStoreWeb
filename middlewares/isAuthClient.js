
import jwt from 'jsonwebtoken';
export const isAuthClient = async(req, res, next) =>{
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if(!token){
        res.send({message: 'the client is not authorized'});
    }

    if(token.startsWith('Bearer ')){
        token = token.slice(7, token.lenght);
    }
    if(token){ //verificamos token
        jwt.verify(token, process.env.SECRET_KEY_CLIENT, (error, decode)=>{
            if(error){
                return res.send({message: 'token no valido'});
            }
            req.decode = decode;
            next();
        });
    }
}