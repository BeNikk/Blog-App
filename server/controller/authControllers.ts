import express, { Request, Response } from 'express';
import User from '../models/user';
const app=express();
import jwt from 'jsonwebtoken';
app.use(express.json());

const secret:string='$upera';
export async function signup(req:Request,res:Response):Promise<void>{
    
    const {email,password}=req.body;
    if(!email){
        res.json({error:"no email"});
    }
    const user= await User.findOne({email});
    if(user){
        res.status(200).json({message:"User already exists"});

    }
    else{

        const obj={email:email,password:password};
        const newUser=new User(obj);
        await newUser.save();
        const token=jwt.sign({email:email},secret,{expiresIn:'12h'});
        res.json({message:"user created successfully",token:token});

    }


}

export async function signin(req:Request,res:Response):Promise<void>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email:email,password:password});
        if(user){
            const token=jwt.sign({email:email},secret,{expiresIn:'24h'});
            res.status(200).json({token:token});



        }
        else{
            res.status(400).json({message:'invalid credentials'});
        }

    }
    catch(error){
        res.send(error);

    }
    


}