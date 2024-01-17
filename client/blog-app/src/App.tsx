

import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import Signuppage from "./components/SignupPage";
import Signinpage from "./components/SigninPage";
import MyFeed from "./components/MyFeed";
import MyProfile from "./components/myProfile";


function App(){
  return(
    <>
    
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/signup' element={<Signuppage/>}/>
    <Route path='/signin' element={<Signinpage/>}/>

    <Route path='/create-blog' element={<CreateBlog/>}/>
    <Route path='/myfeed' element={<MyFeed/>}/>
    <Route path='/myprofile' element={<MyProfile/>}/>
  </Routes>
</BrowserRouter>

    </>
  )
}
export default App;