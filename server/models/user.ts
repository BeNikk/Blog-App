import mongoose, { Document, Schema } from 'mongoose';

interface User extends Document {
    email: string;
    password: string;
  }

const userSchema:Schema<User>=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    }
})


export default mongoose.model<User>('User', userSchema);
