import Signin from "./Sigin";
import Signup from "./Signup";

function Navbar(){

    return(
        <>
        <div className="h-[74px] flex flex-row justify-evenly items-center">
            <div className="w-36 h-36 items-center">
            <img src="/logo-standard.svg" alt="hashnode logo" className="w-full h-full cursor-pointer"/>

            </div>
        <div className="flex flex-row justify-evenly items-center">
            <p className="m-8 text-[#475569] font-semibold cursor-pointer hover:border rounded-full px-4 py-2 hover:border-[#475569]]">MyFeed</p>
            <p className="m-8 text-[#475569] font-semibold cursor-pointer hover:border rounded-full px-4 py-2 hover:border-[#475569]]">Create Blog</p>
            <p className="m-8 text-[#475569] font-semibold cursor-pointer hover:border rounded-full px-4 py-2 hover:border-[#475569]]">My profile</p>

        </div>
        <div className="flex flex-row items-center justify-evenly">
        <Signin/>
        <Signup/>

        



        </div>
    

        </div>
        <hr />
        
        </>
    )
}
export default Navbar;