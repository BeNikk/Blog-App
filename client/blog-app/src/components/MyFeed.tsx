import Card from '@mui/material/Card';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
interface Blog {
    
    blogTitle: string;
    blogContent:string;
    _id:string
    

    // Add other fields as necessary
}

function MyFeed() {
    const [blogs, setBlogs] = useState<Blog[]>([{blogTitle:"no blogs",blogContent:"no content",_id:'osada'}]);
    const navigate=useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/myfeed",{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
            .then(res => {
                if (Array.isArray(res.data)) {
                    setBlogs(res.data);
                } else {
                    console.error("Response is not an array:", res.data);
                
                }
            })
            .catch(error => {
                console.log("error fetching blogs", error);
            });
    }, [blogs]);

    return (
        <>
            <Navbar />
            <div>
                {blogs.map(blog => (
                    <Card key={blog._id}  className='w-[1000px] h-[150px] ml-[20%] mt-12 bg-gray-200 mb-4' onClick={()=>{
                        console.log(blog._id);
                        navigate(`/post/${blog._id}`);
                    }}>
                        <div className='relative flex flex-row justify-center object-contain'>
                            <img src="tech1.jpg" alt="" className='absolute left-0 w-[250px] h-[150px] object-cover' />
                            <p className='absolute top-[30px] text-2xl font-bold ml-12'>{blog.blogTitle}</p>
                            <br />
                            <p className='absolute top-[60px] text-xl mt-4'>Read into what they say</p>
                            <p className='absolute top-[90px] mt-4'>
                                click to read
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default MyFeed;
