import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Richtext from './Create-blog-components/richtext';
import Navbar from './Navbar';


function CreateBlog(){
    return(
        <>
        <Navbar/>
        <div className='w-[70%] h-full mt-10 ml-[10%] bg-gray-100'>
        <Card variant="outlined">
            <div className='flex flex-row items-center justify-center'>
                <p className='text-3xl font-bold mt-4'>Develop.Write.Share</p>


            </div>
            <div className='flex flex-col justify-center mt-8'>
                <p className='text-1xl font-bold mb-4 ml-4'>Blog title</p>
            <TextField id="outlined-basic" label="Blog-Title" variant="outlined" className='m-4 mb-4' />
            <p className='text-1xl font-bold mt-8 mb-4 ml-4'>Blog Content</p>
            <Richtext/>
            <button className="ml-[45%] right-4 bottom-0 mb-12 mt-12 w-[100px] bg-[#3168FA] text-white font-semibold rounded-full px-4 py-2 hover:bg-[#6414F8]">Publish</button>



            </div>
            

        </Card>


        </div>
        
        </>
    )
}
export default CreateBlog;