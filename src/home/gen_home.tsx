import React from 'react' 
import product2 from "../image/lap2.jpg"
import data from "../data/laptop.json"

function gen_home(){
    return(
        <>
        {data.map((item) => (
          <div className="product_list1">
                <a href="/macbook-air-m1">
                  <img className="product_img_1" src= {product2} alt=""></img>
                  </a>
                  <p className="product_deltail">{item.name}</p>
                  <div className="product_price">
                  <p className="product_old_price">{item.old}</p>
                    <p className="product_price_sale">{item.price}</p>
                    
                  </div>
                </div>
        ))}
        
        </>
        
    )
}
export default gen_home;

