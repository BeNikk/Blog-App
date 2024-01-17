

import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import Signuppage from "./components/SignupPage";
import Signinpage from "./components/SigninPage";
import MyFeed from "./components/MyFeed";


function App(){
  return(
    <>
    <Navbar/>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/signup' element={<Signuppage/>}/>
    <Route path='/signin' element={<Signinpage/>}/>

    <Route path='/create-blog' element={<CreateBlog/>}/>
    <Route path='/myfeed' element={<MyFeed/>}/>
  </Routes>
</BrowserRouter>

    </>
  )
}
export default App;