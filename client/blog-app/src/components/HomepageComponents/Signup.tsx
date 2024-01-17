import { Link } from 'react-router-dom';

function Signup(){
    return(
        <div className="m-4">
            <button className="bg-[#3168FA] text-white font-semibold rounded-full px-4 py-2 hover:bg-[#6414F8]"><Link to='/signup'>Signup</Link></button>

        </div>
        
    )
}
export default Signup;