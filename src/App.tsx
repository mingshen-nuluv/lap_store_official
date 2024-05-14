import {Route, Routes, BrowserRouter} from 'react-router-dom';
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
import Airm1 from './Detail/mac01/mac1'
import Asus1 from './Detail/Asus/asus1'

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
                <Route path = '/dell' element = {<Dell/>}/>
                
                <Route path = '/macbook-air-m1' element = {<Airm1/>}/> 
                <Route path = '/Laptop ASUS TUF Gaming F15 FX506HF-HN078W' element = {<Asus1/>}/> 
                <Route path = '/generics' element = {<Generics/>}/>
                
              </Route>
            </Routes>

          </BrowserRouter>
          
          
</>
  )
}

export default App;
