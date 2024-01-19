import express, {Request,Response} from 'express';
import Blog from '../models/blog';
const app=express();
app.use(express.json());
export async function createBlog(req: Request, res: Response) {
    const { blogTitle, blogContent } = req.body;
    const obj = { blogTitle, blogContent };
    const newBlog = new Blog(obj);

    try {
        await newBlog.save();
        res.json({ message: "Blog successfully created" });
    } catch (error) {
        
        console.error("Error creating blog:", error);

        res.status(500).json({ message: "Error creating blog" });
    }
}




export async function getBlog(req:Request,res:Response){
    const allblog=await Blog.find({});
    res.json(allblog);
}

export async function getSpecificBlog(req: Request, res: Response) {
    const id = req.params.id;
    
    try {
        const blog = await Blog.findById(id);
        if (blog) {
            res.json(blog); 
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        console.error('Error fetching specific blog:', error);
        res.status(500).json({ message: "Internal Server Error" }); 
    }
}