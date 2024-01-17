import { Link } from 'react-router-dom';

function Signin(){
    return(
        <div className="m-4">
        <button className="hover:border rounded-full px-4 py-2 hover:border-[#475569]]"><Link to='/signin'>Login</Link></button>

    </div>
    )
}
export default Signin;