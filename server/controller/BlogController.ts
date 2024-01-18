import express, {Request,Response} from 'express';
import Blog from '../models/blog';
const app=express();
app.use(express.json());

export async function createBlog(req:Request,res:Response){
    const {blogTitle,blogContent}=req.body;
    const obj={blogTitle,blogContent};
    const newBlog=new Blog();
    await newBlog.save();
    res.json({message:"Blog successfully created"});

}


export async function getBlog(req:Request,res:Response){
    const allblog=await Blog.find({});
    res.json(allblog);
}

export async function getSpecificBlog(req:Request,res:Response){
    const id=req.params.id;
    const blog=await Blog.findOne({ _id:id });
    if(blog){
        res.json({blog:blog});

    }
    else{
        res.json({message:"blog not found"});
    }

}