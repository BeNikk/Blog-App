import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Navbar from './Navbar';
import { useState, ChangeEvent,useRef } from 'react';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function CreateBlog(){

    const navigate=useNavigate();
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':localStorage.getItem('token')
        },
      };

    
    const editor = useRef(null);

    const[blogTitle,setBlogTitle]=useState('');
    const[blogContent,setBlogContent]=useState('');
    function setTitle(e:ChangeEvent<HTMLInputElement>){
        setBlogTitle(e.target.value);


    }
    function handleContent(e:string){
        setBlogContent(e);

    }
    const blog={
        blogTitle:blogTitle,
        blogContent:blogContent
    }
    function publish(){
        axios.post('http://localhost:3000/createblog',blog,config).then(res=>{
            console.log(res.data);
            navigate('/myfeed');
        }).catch(error=>{
            console.log("error",error);
        })
    }

    return(
        <>
        <Navbar/>
        <div className='w-[70%] h-full mt-10 ml-[10%] bg-gray-100'>
        <Card variant="outlined">
            <div className='flex flex-row items-center justify-center'>
                <p className='text-3xl font-bold mt-4'>Develop.Write.Share</p>


            </div>
            <div className='flex flex-col justify-center mt-8'>
                <p className='text-1xl font-bold mb-4 ml-4' >Blog title</p>
            <TextField id="outlined-basic" label="Blog-Title" variant="outlined" className='m-4 mb-4' onChange={setTitle} />
            <p className='text-1xl font-bold mt-8 mb-4 ml-4' >Blog Content</p>
            <JoditEditor
           ref={editor}
           value={blogContent}
          onChange={handleContent}/>
            <button className="ml-[45%] right-4 bottom-0 mb-12 mt-12 w-[100px] bg-[#3168FA] text-white font-semibold rounded-full px-4 py-2 hover:bg-[#6414F8]" onClick={publish}>Publish</button>



            </div>
            

        </Card>


        </div>
        
        </>
    )
}
export default CreateBlog;