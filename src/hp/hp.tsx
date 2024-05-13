
import React from 'react';
import '../page/index.css';
import backgr from '../image/pic.png'
import Gen_hp from "./gen_hp"
import Genbrand from "./genbrand"

import bannerhp from "../image/bannerhp.jpg"
function Home() {
  return (
<>
      <div className="banner">
        <div className="banner_list">
            <img className="banner1" src={bannerhp} alt=""></img>
            <img className="banner1" src={bannerhp} alt=""></img>
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
                <Gen_hp/>
              </div>
          </div>
          </div>
        </div>
</>
  )
}
export default Home;
