import express, {Request, Response} from 'express';
const router=express.Router();
import { signup,signin } from '../controller/authControllers';
import { authenticateToken } from '../middleware/authenticationMiddleware';

router.post('/signup',signup);
router.post('/signin',signin);
router.get('/user/me',authenticateToken,(req:Request,res:Response)=>{
    if(!req.user){
       return res.json("unauthorized");
    }
    res.json(req.user);
    

})

export default router;