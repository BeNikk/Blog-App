import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';

interface Blog{
    blogTitle:string,
    blogContent:string,
    blogId:string
}
function BlogDetail() {

    const { blogId } = useParams();
    const [blog, setBlog] = useState<Blog>({blogContent:"no contnet",blogTitle:"no title",blogId:"ie"});

    useEffect(() => {
        axios.get(`http://localhost:3000/post/${blogId}`)
            .then(response => {
                console.log("control reached here");
                setBlog(response.data);
            })
            .catch(error => {
                console.error('Error fetching blog details', error);
            });
    }, [blogId]);

    if (!blog) {
        return <div>Loading...</div>;
    }
    const sanitizedContent = DOMPurify.sanitize(blog.blogContent);


    return (
        <div>
            <h1>{blog.blogTitle}</h1>
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </div>
    );
}

export default BlogDetail;
