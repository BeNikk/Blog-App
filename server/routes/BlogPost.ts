import express, {Request, Response} from 'express';
import  { createBlog, getBlog, getSpecificBlog } from '../controller/BlogController';
import { authenticateToken } from '../middleware/authenticationMiddleware';
const router=express.Router();

router.post('/createblog',authenticateToken,createBlog);

router.get('/myfeed',authenticateToken,getBlog);
router.get('/post/:id',getSpecificBlog);
export default router;