import data from "./data/genasus.json"
import '../page/index.css'
function gen_asus(){
    return(
        <>
        {data.map((item) => (

                <div className="product_list1">
                  <img className="product_img_1" src={item.img} alt=""></img>
                  <p className="product_deltail">{item.name}</p>
                <div className="product_price">
                  <p className="product_price_sale">{item.price}</p>
                  <p className="product_old_price">{item.old}</p>
          </div>
        </div>
        ))}
        
        </>
        
    )
}
export default gen_asus;

