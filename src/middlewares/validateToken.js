import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const authRequired = (req, res, next ) =>{
    const {token} = req.cookies



    if(!token) return res.status(401).json({ message: "No token authorization"})
    
        //VERIFICAMOS SI EL TOKEN ES DE NOSOTROS
        jwt.verify(token, TOKEN_SECRET,  (err, user) =>{
            if (err) return res.status(403).json({message: "Token Invalido "})
        

            //GUARDAMOS LOS DATOS EN USER
            req.user = user
        
            next();
        })
}