import '../page/index.scss';
import backgr from '../image/pic.png'
import banneraccer1 from "../image/banneracer1.jpg"
import banneraccer2 from "../image/banneracer2.jpg"
import Gen_acer from "./gen_acer"
import Genbrand from "./genbrand"

function Home() {
  return (
<>
      <div className="banner">
        <div className="banner_list">
            <img className="banner1" src={banneraccer1} alt=""></img>
            <img className="banner1" src={banneraccer2} alt=""></img>
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
                  <Gen_acer/>
              </div>
          </div>
          </div>
        </div>
</>
  )
}
 
export default Home;
