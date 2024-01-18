import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

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
            

        });
        next();





}
}