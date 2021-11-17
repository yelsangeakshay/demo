import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignIn from "./components/user/SignIn";


const AppRoutes =()=>{
    console.log("Browser")
    return(
        <div>
           <BrowserRouter>
           <Routes>
           <Route path="/signin" exact element={<SignIn/>} />
           </Routes>            
           </BrowserRouter> 
        </div>
    )
}

export default AppRoutes;