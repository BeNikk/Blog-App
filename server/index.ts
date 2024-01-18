import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authroutes from './routes/authRoutes';
import blogroutes from './routes/BlogPost';
const app = express();
const port: number = 3000;
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://nikhilbhatt:nikhilbhatt@cluster0.a4hdcfb.mongodb.net/blog-App');

app.use('/',authroutes);
app.use('/',blogroutes)
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});




