import mongoose, {Schema,Document, mongo} from "mongoose";

interface blog extends Document{
    blogTitle:string,
    blogContent:string,

};
const blogSchema=new mongoose.Schema({
    blogTitle:{
        type:String,
        required:true,

    },
    blogContent:{
        type:String,
        required:true
    }
});

const Blog=mongoose.model('Blog',blogSchema);
export default Blog;
