
import React from 'react'
import backgr from '../image/pic.png'
import brand1 from "../image/brand1.jpg"
import brand2 from "../image/brand2.jpg"
import brand3 from "../image/brand3.jpg"
import brand4 from "../image/brand4.jpg"
import brand5 from "../image/brand5.jpg"
import brand6 from "../image/brand6.jpg"
import brand7 from "../image/brand7.jpg"
import brand8 from "../image/brand8.jpg"
import banner from "../image/banner.jpg"
import banner2 from "../image/banner2.jpg"
import banner3 from "../image/banner3.jpg"

// import data from "../data/laptop.json"
import Generics from "./gen_home"
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
      <div>             
        <img className ="backgroundimage" src={backgr} alt="pic"/>
        </div>
        <div className="shop">
          <div className = 'shop_list'>
            
            <div className='product_noform'>
                
                    <a href="/macbook">
                      <img className="product_brand1" src ={brand1} alt=""></img>
                    </a>
                    <a href="/asus">
                        <img className="product_brand1" src ={brand2} alt=""></img>
                    </a> 
                    <a href="/msi">
                      <img className="product_brand1" src ={brand3} alt=""></img>
                    </a>
                    <a href="/lenovo">
                      <img className="product_brand1" src ={brand4} alt=""></img>
                    </a>
                    <a href="/hp">
                      <img className="product_brand1" src ={brand5} alt=""></img>
                    </a>
                    <a href="/acer">
                      <img className="product_brand1" src ={brand6} alt=""></img>
                    </a>
                    <a href="/LG">
                      <img className="product_brand1" src ={brand7} alt=""></img>
                    </a>
                    <a href="/Dell">
                      <img className="product_brand1" src ={brand8} alt=""></img>
                    </a>
                
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










