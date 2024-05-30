
import React from 'react'
import backgr from '../image/pic.png'
import banner from "../image/banner.jpg"
import banner2 from "../image/banner2.jpg"
import banner3 from "../image/banner3.jpg"
import Generics from "./gen_home"
import Genbrand from "./genbrand"


function Home() {
  return (
<>


<div className="header">
      <div className="banner">
        <div className="banner_list">
            <img className="banner1" src={banner} alt=""></img>
            <img className="banner1" src={banner2} alt=""></img>
            <img className="banner1" src={banner3} alt=""></img>
        </div>
      </div>
      <div className='drop_down'>
      </div>
      <div>             
        <img className ="backgroundimage" src={backgr} alt="pic"/>
        </div>
        <div className="shop">
          <div className = 'shop_list'>
            
            <div className='product_noform'>

                    <Genbrand/>
                
            </div>
            <div className="product_form">
              <div className='product_form_up'>
                  <p className="shop_list_head_text">Sản Phẩm Nổi Bật</p>
              </div>
              <div className='product_form_down'>
                  <Generics/>
              </div>
            </div>
          </div>
        </div>
    </div>
    
</>
  )

}
 
export default Home;










