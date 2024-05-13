
import React from 'react';
import '../page/index.css';
import backgr from '../image/pic.png'
import banner from "../image/banner.jpg"

import bannermsi from "../image/bannerMSI.jpg"
import Gen_msi from "./gen_msi"
import Genbrand from "./genbrand"



function Home() {
  return (
<>

      <div className="banner">
        <div className="banner_list">
            <img className="banner1" src={banner} alt=""></img>
            <img className="banner1" src={bannermsi} alt=""></img>
        </div>
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
                <Gen_msi/>
              </div>
          </div>

          
          </div>
        </div>
 
    
</>
  )

}
 
export default Home;
