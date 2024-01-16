import Homelast from "./components/HomepageComponents/HomeLast";

import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App(){
  return(
    <>
    <Navbar/>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
  </Routes>
</BrowserRouter>

    </>
  )
}
export default App;