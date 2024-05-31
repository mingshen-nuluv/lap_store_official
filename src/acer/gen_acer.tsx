import data from "./data/acer.json"
import sale_img from "../image/asset1.png"

import '../page/index.scss'
function gen_acer(){
    return(
        <>
        {data.map((item) => (
          <div className="product_list1">
            <div className="flex_box">
                    <div>
                      <img className = "asset_pic" src={sale_img} alt=""/>
                      <p className="text_in_asset">{item.text_in_asset}</p>
                    </div>
                      <div className="install_box">
                        <p className="text_in_install">Trả góp 0%</p>
                      </div>
                  </div>
                <a href={item.href}>               
                <img className="product_img_1" src={item.img}  alt=""></img>
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
export default gen_acer;

