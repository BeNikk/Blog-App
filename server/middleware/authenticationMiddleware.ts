import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
interface UserPayload {
    id: string;
    username: string;
    
}
declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
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
        







}
}