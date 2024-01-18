import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Signuppage(){
    const navigate = useNavigate();

    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    function handleChangeEmail(e:ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value);
    }
    function handleChangePass(e:ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value);
    }
    const postData = {
        email: email,
        password: password
      };
    function Submit(){
        axios.post('http://localhost:3000/signup',postData).then(res=>{
            console.log(res.data);
            const token=res.data.token;
            localStorage.setItem('token',token);
            navigate('/myfeed');

        }).catch(error => {
            console.error('There was an error!', error);
            // Handle error
          });
        ;
    }
    return(
        <>
        <div className="flex h-screen bg-gray-200">
            <div className="w-1/2">
                <img src="/cover1.jpg" alt="" />
            </div>
            
            <Card variant='outlined' className=' mt-[10%] ml-[10%] h-[450px] w-[500px] flex flex-col items-center justify-center w-500px' >
                <p className='text-2xl font-bold text-[#2463eb] mb-12 '>Signup to Hashnode</p>
            <TextField id="outlined-basic" label="email" variant="outlined" className='m-4 mb-4 mt-4' onChange={handleChangeEmail} />
            <br></br>
            <TextField id="outlined-basic" label="password" variant="outlined" className='m-4 mb-4 mt-4' onChange={handleChangePass} />
            <button className="mt-12 bg-[#3168FA] text-white font-semibold rounded-full px-4 py-2 hover:bg-[#6414F8]" onClick={Submit}>Signup</button>
            <p className='text-1xl mt-8'>Already have an account, <Link to='/signin' className="text-[#2463eb]">Signin</Link></p>







            </Card>

        </div>
        </>
    )
}
export default Signuppage;