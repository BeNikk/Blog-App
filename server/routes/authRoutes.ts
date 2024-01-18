import express, {Request, Response} from 'express';
const router=express.Router();
import { signup,signin } from '../controller/authControllers';

router.post('/signup',signup);
router.post('/signin',signin);

export default router;