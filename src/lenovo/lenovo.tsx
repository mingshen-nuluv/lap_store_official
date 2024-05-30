
import React from 'react';
import '../page/index.scss';
import backgr from '../image/pic.png'
import bannerlenovo1 from "../image/bannerlenovo1.jpg"
import bannerlenovo2 from "../image/bannerlenovo2.jpg"

import Gen_lenovo from "./gen_lenovo"
import Genbrand from "./genbrand"
function Home() {
  return (
<>

      <div className="banner">
        <div className="banner_list">
          <img className="banner1" src={bannerlenovo1} alt=""></img>
          <img className="banner1" src={bannerlenovo2} alt=""></img>

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
                <Gen_lenovo/>
              </div>
          </div>

          
          </div>
        </div>

    
</>
  )

}
 
export default Home;
