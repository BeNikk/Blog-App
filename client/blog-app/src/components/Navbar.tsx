import Signin from "./HomepageComponents/Sigin";
import Signup from "./HomepageComponents/Signup";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";


function Navbar(){
    const [user,setUser]=useState(null);
    
    useEffect(()=>{
        axios.get('http://localhost:3000/user/me').then(response=>{
            setUser(response.data)

        })

    },[])

    return(
        <>
        <div className="h-[74px] flex flex-row justify-evenly items-center">
            <div className="w-36 h-36 items-center">
            <img src="/logo-standard.svg" alt="hashnode logo" className="w-full h-full cursor-pointer"/>
          

            </div>
        <div className="flex flex-row justify-evenly items-center">
        <p className="m-8 text-[#475569] font-semibold cursor-pointer hover:border rounded-full px-4 py-2 hover:border-[#475569]]"><Link to='/' >Home</Link></p>
            <p className="m-8 text-[#475569] font-semibold cursor-pointer hover:border rounded-full px-4 py-2 hover:border-[#475569]]"><Link to='/myfeed' >MyFeed</Link></p>
            <p className="m-8 text-[#475569] font-semibold cursor-pointer hover:border rounded-full px-4 py-2 hover:border-[#475569]]"><Link to='/create-blog'>Create Blog</Link></p>
            <p className="m-8 text-[#475569] font-semibold cursor-pointer hover:border rounded-full px-4 py-2 hover:border-[#475569]]"><Link to='/myprofile'>My profile</Link></p>

        </div>
        <div className="flex flex-row items-center justify-evenly">
        {!user &&
        <div>
        <Signin/>
        <Signup/>

        </div>
   
        }
        {user &&
        <div>
             <button className="hover:border rounded-full px-4 py-2 hover:border-[#475569]]"><Link to='/signin'>Logout</Link></button>

        </div>
        }
        

        



        </div>
    

        </div>
        <hr />
        
        </>
    )
}
export default Navbar;