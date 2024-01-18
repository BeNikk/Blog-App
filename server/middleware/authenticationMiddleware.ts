import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
interface UserPayload {
    // Add properties that you expect in your JWT payload
    id: string;
    username: string;
    // etc...
}
declare global {
    namespace Express {
        interface Request {
            user?: UserPayload; // Extending Express' Request type
        }
    }
}


export function authenticateToken(req:Request,res:Response,next:NextFunction):void{
    const authHeader=req.headers['authorization'];
    const token=authHeader;
    if(!token){
         res.json({message:"signup/signin"});

    }
    else{
        jwt.verify(token,'$upera',(err:any,user:any)=>{
            if(err){
                 return res.status(400).json({message:"invalid token"});
            }
            req.user=user as UserPayload;
            next();


        });
        

        next();





}
}