import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./page/SignIn/signin";
import SignUp from "./page/SignUp/signup";
import Profile from "./page/Profile/profile";
import {useEffect} from "react";
import "./App.css";
import {apiPosts} from "./api/ApiPosts";
import handleLogin from "./page/SignIn/signin"



// import HomeSignIn from "./page/Homesignin/index"
// import Macbook from "./macbook/macbook";
// import Asus from "./asus/asus";
// import Msi from "./msi/msi";
// import Lenovo from "./lenovo/lenovo";
// import Hp from "./hp/hp";
// import Acer from "./acer/acer";
// import LG from "./LG/LG";
// import Dell from "./dell/dell";

// import Airm1 from "./Detail/mac_list_produce/mac1";
// import Airm2 from "./Detail/mac_list_produce/mac2";
// import Airm3 from "./Detail/mac_list_produce/mac3";
// import Airm4 from "./Detail/mac_list_produce/mac4";
// import Airm5 from "./Detail/mac_list_produce/mac5";
// import Airm6 from "./Detail/mac_list_produce/mac6";
// import Airm7 from "./Detail/mac_list_produce/mac7";
// import Airm8 from "./Detail/mac_list_produce/mac8";
// import Airm9 from "./Detail/mac_list_produce/mac9";
// import Airm10 from "./Detail/mac_list_produce/mac10";
// import Airm11 from "./Detail/mac_list_produce/mac11";
// import Airm12 from "./Detail/mac_list_produce/mac12";

// import Asus1 from "./Detail/Asus_list_produce/Asus1";
// import Asus2 from "./Detail/Asus_list_produce/Asus2";
// import Asus3 from "./Detail/Asus_list_produce/Asus3";
// import Asus4 from "./Detail/Asus_list_produce/Asus4";
// import Asus5 from "./Detail/Asus_list_produce/Asus5";
// import Asus6 from "./Detail/Asus_list_produce/Asus6";
// import Asus7 from "./Detail/Asus_list_produce/Asus7";
// import Asus8 from "./Detail/Asus_list_produce/Asus8";
// import Asus9 from "./Detail/Asus_list_produce/Asus9";
// import Asus10 from "./Detail/Asus_list_produce/Asus10";
// import Asus11 from "./Detail/Asus_list_produce/Asus11";
// import Asus12 from "./Detail/Asus_list_produce/Asus12";
// import Asus13 from "./Detail/Asus_list_produce/Asus13";
// import Asus14 from "./Detail/Asus_list_produce/Asus14";

import Home from "./page/Home";
import LapStore from "./layout/LapStore";
import LayoutHeader from "./layout/Layout_header";


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LapStore />}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />

          </Route>
        </Routes>
       

      </BrowserRouter>
     
    </>
  );
  
}


export default App;





