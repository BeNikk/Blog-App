import Card from '@mui/material/Card';
import Navbar from './Navbar';
function MyProfile(){
    return(
        <>
        <div>
            <Navbar/>
            <div className="relative flex flex-col  justify-center">
                <p className='ml-[40%] mt-8 font-bold text-4xl text-[#2463eb] '>Profile Page</p>
            <Card variant="outlined" className='absolute top-20 left-[30%] w-[700px] h-[1080px] '>
            <img src="/tech1.jpg" className="ml-[20%] w-[60%] h-[200px]" alt="" />
                <div className='flex flex-col'>
                <p className="mt-16 ml-12 text-2xl font-bold">Full name</p>
                <p className="mt-16 ml-12 text-2xl font-bold">tech stack</p>
                <p className='mt-16 ml-12 text-2xl font-bold'>Link to socials</p>


                </div>
            </Card>


            </div>
        </div>
        </>
    )

}
export default MyProfile;