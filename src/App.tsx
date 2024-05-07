
import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from "./home/Home"
import SignIn from "./page/signin"  
import SignUp from './page/signup';
import Profile from "./page/profile"
import Macbook from "./page/macbook"
import Asus from "./page/asus"
import Msi from "./page/msi"
import Lenovo from "./page/lenovo"
import Hp from "./page/hp"
import Acer from "./page/acer"
import LG from "./page/LG"
import Dell from "./page/Dell"
import Airm1 from './post/airm1'
import Generics from './home/gen_home'
import { Header } from './page/layout';


function App() {
  return (
<>
          <BrowserRouter >
            <Routes>
              <Route element={<Header/>}>
                <Route path ='/' element = {<Home/>}/>
                <Route path = '/SignIn' element = {<SignIn />}/>
                <Route path = '/SignUp' element = {<SignUp />}/>
                <Route path = '/profile' element = {<Profile />}/>
                <Route path = '/macbook' element = {<Macbook/>}/>
                <Route path = '/asus' element = {<Asus/>}/>
                <Route path = '/msi' element = {<Msi/>}/>
                <Route path = '/lenovo' element = {<Lenovo/>}/>
                <Route path = '/hp' element = {<Hp/>}/>
                <Route path = '/acer' element = {<Acer/>}/>
                <Route path = '/LG' element = {<LG/>}/>
                <Route path = '/Dell' element = {<Dell/>}/>
                <Route path = '/macbook-air-m1' element = {<Airm1/>}/>
                <Route path = '/generics' element = {<Generics/>}/>
                
              </Route>
            </Routes>

          </BrowserRouter>
          
          
</>
  )
}

export default App;
