import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';


function Signinpage(){
    return(
        <>
        <div className="flex h-screen bg-gray-200">
            <div className="w-1/2">
                <img src="/cover2.jpg" alt="" />
            </div>
            
            <Card variant='outlined' className=' mt-[10%] ml-[10%] h-[450px] w-[500px] flex flex-col items-center justify-center w-500px' >
                <p className='text-2xl font-bold text-[#2463eb] mb-12 '>Signin to Hashnode</p>
            <TextField id="outlined-basic" label="email" variant="outlined" className='m-4 mb-4 mt-4' />
            <br></br>
            <TextField id="outlined-basic" label="password" variant="outlined" className='m-4 mb-4 mt-4' />
            <button className="mt-12 bg-[#3168FA] text-white font-semibold rounded-full px-4 py-2 hover:bg-[#6414F8]">Signup</button>
            <p className='text-1xl mt-8'>Dont have an account <a href="" className='text-[#2463eb]'>Signup</a></p>







            </Card>

        </div>
        </>
    )
}
export default Signinpage;