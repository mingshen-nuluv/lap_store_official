import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./home/Home"
import SignIn from "./page/signin"  
import SignUp from './page/signup';
import Profile from "./page/profile"
import Macbook from "./macbook/macbook"
import Asus from "./asus/asus"
import Msi from "./msi/msi"
import Lenovo from "./lenovo/lenovo"
import Hp from "./hp/hp"
import Acer from "./acer/acer"
import LG from "./LG/LG"
import Dell from "./dell/dell"
import Airm1 from './Detail/mac_list_produce/mac1'
import Airm2 from './Detail/mac_list_produce/mac2'
import Airm3 from './Detail/mac_list_produce/mac3'
import Airm4 from './Detail/mac_list_produce/mac4'
import Airm5 from './Detail/mac_list_produce/mac5'
import Airm6 from './Detail/mac_list_produce/mac6'
import Airm7 from './Detail/mac_list_produce/mac7'
import Airm8 from './Detail/mac_list_produce/mac8'
import Airm9 from './Detail/mac_list_produce/mac9'
import Airm10 from './Detail/mac_list_produce/mac10'
import Airm11 from './Detail/mac_list_produce/mac11'
import Airm12 from './Detail/mac_list_produce/mac12'

import Asus1 from './Detail/Asus_list_produce/Asus1'
import Asus2 from './Detail/Asus_list_produce/Asus2'
import Asus3 from './Detail/Asus_list_produce/Asus3'
import Asus4 from './Detail/Asus_list_produce/Asus4'
import Asus5 from './Detail/Asus_list_produce/Asus5'
import Asus6 from './Detail/Asus_list_produce/Asus6'
import Asus7 from './Detail/Asus_list_produce/Asus7'
import Asus8 from './Detail/Asus_list_produce/Asus8'
import Asus9 from './Detail/Asus_list_produce/Asus9'
import Asus10 from './Detail/Asus_list_produce/Asus10'
import Asus11 from './Detail/Asus_list_produce/Asus11'
import Asus12 from './Detail/Asus_list_produce/Asus12'
import Asus13 from './Detail/Asus_list_produce/Asus13'
import Asus14 from './Detail/Asus_list_produce/Asus14'

import { Header } from './page/layout_all'
import { Body } from './page/layout_header'
import { Footer } from './page/layout_footer';


function App() {
  return (
    
<>
                
          <BrowserRouter >
            <Routes>
               <Route element={<Body/>}>
                  <Route path = '/SignIn' element = {<SignIn />}/>
                  <Route path = '/SignUp' element = {<SignUp />}/>
                  <Route path = '/profile' element = {<Profile />}/>
               </Route>
                
              <Route element={<Header/>}>
                <Route path ='/' element = {<Home/>}/>
                <Route path = '/macbook' element = {<Macbook/>}/>
                <Route path = '/asus' element = {<Asus/>}/>
                <Route path = '/msi' element = {<Msi/>}/>
                <Route path = '/lenovo' element = {<Lenovo/>}/>
                <Route path = '/hp' element = {<Hp/>}/>
                <Route path = '/acer' element = {<Acer/>}/>
                <Route path = '/LG' element = {<LG/>}/>
                <Route path = '/dell' element = {<Dell/>}/>

                 

              </Route>
              <Route element= {<Footer/>}>
                <Route path = '/macbook-air-m1' element = {<Airm1/>}/> 
                <Route path = '/macbook-air-m2' element = {<Airm2/>}/> 
                <Route path = '/macbook-air-m3' element = {<Airm3/>}/> 
                <Route path = '/macbook-air-m4' element = {<Airm4/>}/> 
                <Route path = '/macbook-air-m5' element = {<Airm5/>}/> 
                <Route path = '/macbook-air-m6' element = {<Airm6/>}/> 
                <Route path = '/macbook-air-m7' element = {<Airm7/>}/> 
                <Route path = '/macbook-air-m8' element = {<Airm8/>}/> 
                <Route path = '/macbook-air-m9' element = {<Airm9/>}/> 
                <Route path = '/macbook-air-m10' element = {<Airm10/>}/> 
                <Route path = '/macbook-air-m11' element = {<Airm11/>}/> 
                <Route path = '/macbook-air-m12' element = {<Airm12/>}/> 

                <Route path = '/Asus1' element = {<Asus1/>}/> 
                <Route path = '/Asus2' element = {<Asus2/>}/> 
                <Route path = '/Asus3' element = {<Asus3/>}/> 
                <Route path = '/Asus4' element = {<Asus4/>}/> 
                <Route path = '/Asus5' element = {<Asus5/>}/> 
                <Route path = '/Asus6' element = {<Asus6/>}/> 
                <Route path = '/Asus7' element = {<Asus7/>}/> 
                <Route path = '/Asus8' element = {<Asus8/>}/> 
                <Route path = '/Asus9' element = {<Asus9/>}/> 
                <Route path = '/Asus10' element = {<Asus10/>}/> 
                <Route path = '/Asus11' element = {<Asus11/>}/> 
                <Route path = '/Asus12' element = {<Asus12/>}/> 
                <Route path = '/Asus13' element = {<Asus13/>}/> 
                <Route path = '/Asus14' element = {<Asus14/>}/>
              </Route>
            </Routes>

          </BrowserRouter>
          
          
</>
  )
}

export default App;
