import '../Detail.scss'
import data from './Asus1.json'
import banner_mac_air_m1 from "../image/tragop_mac_air_m1.jpg"
import giohang from "../image/gio_hang.jpg"
import bw_prod1 from "../image/Hub_Ugreen_USB-C.jpg"
import bw_prod2 from "../image/HUB_Chuyển_Đổi_Ugreen_Type C.jpg"
import bw_prod3 from "../image/Củ_sạc_Anker_PowerPort.jpg"
import bw_prod4 from "../image/Cáp_USB-C to_USB-C.jpg"

function mac1_gen() {
  return (
<>
{data.map((item) => (
      <>
      <div>
        <div className='header_detail'>
          <div className='headder_deltail_left'>
          <p className='header_title'>{item.headtt}</p>
            </div>
          <div className='headder_deltail_right'>
            <img className='star' src={item.star_icon} alt="" />
            <img className='star' src={item.star_icon} alt="" />
            <img className='star' src={item.star_icon} alt="" />
            <img className='star' src={item.star_icon} alt="" />
            <img className='star' src={item.star_icon} alt="" />
            <p className='text_head_evaluate'>{item.thevaluate} </p>
          </div>
    </div>
      </div>
      <div className='under_header_mac_air_m1'>
      <div className='video_box'>
      <iframe className="video_thumbnail_macbook_air_m1"
               src="https://www.youtube.com/embed/BLNqoCMLnfM" title="Asus TUF F15 FX506HF Review | TUF With RTX 2050!" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        
        
        
        <div className="infor_product"> 
          <div className="info_box">
            <p className="head_text_info">Thông tin sản phẩm</p> 
            <div className="line1">
              <img className = 'img_aboard_src' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAyCAYAAADWU2JnAAAABHNCSVQICAgIfAhkiAAAAWRJREFUWEftmcFNw0AQRf+sG6ADoAJCBUAHlJDL7hW7ApIOcrS8PpgKKAHTQaiAlOBcfdhBIxHJRgFpbWT7MHuLtM78efu0hx0CAOfcM4A1gCv5PdVi5oaIamNMluf5gZxzGwASZrbFzHvv/a2E+ZyayLmuQwgPEoZnQ9IvnC0pzHbRYbIQwn6qYzPG7ADcfNfrkxGJyrKspwpjra2J6E7D/CSuZH5zUMkomdj7SZ1RZ9SZWALqTCwxvWfUGXUmloA6E0tM7xl1Rp2JJaDOxBL7855h5hTAZC9XAHZEtDr7WBTb2T/vX/YDY2yzL23bplVVNc65RwCvsX/Q2T+KzLEoiotucWutOPA0MNDwMMz87r2/7xYeOYcYHkZCGGOuZRpyCmStfSOiXsAISluy1h6I6DLio+5WCbIJITTGGBkRiTeD1mmQMfuIB8BHURQrkjbkrJl5PYLQIBoAjsxcJ0mSynF/AXY82KKEipF6AAAAAElFTkSuQmCC" alt="" />
              <p className='under_text_info'>Máy mới 100%, đầy đủ phụ kiện từ nhà sản xuất. Sản phẩm có mã SA/A (được Apple Việt Nam phân phối chính thức).</p>
            </div>
            <div className="line2">
              <img className = 'img_aboard_src' src="data:image/png;base64,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" alt="" />
              <p className='under_text_info'>Máy, Sách HDSD, Cáp sạc USB-C (2 m), Cốc sạc USB-C 30W</p>
            </div>
            <div className="line3">
              <img className = 'img_aboard_src' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAACdRJREFUaEPNWnmQXGUR//WbyW5IKoSNUEhU2HAYlMuyUigFhKAoYgQlZCNXwh7zvpcEghwlaBXgKlCcIhDY7PT3ZgihkGMgHAUlghxyqCVQiEUUsYSAbgTBzAY53My8r61Ovana7M7xdnaw6P929/u6+/f13W8JHwEZY3YGcKqIfAPAZ4lIALwiIg8R0a3M/E6rxVIrGRpjdgNwLoAVAKbV4P0hEXEqlbp8YGDgzVbJbwmQFStWdJTL5fOJaJUCEBG1wK8B3FwqlZ5pb2+Hc+5QAKcBOIKIVO4HIrI6nU5fsWbNmuJkAU0KyLJlyz7R3t5+VgxgZgzg/iiKLsnn889VUy4IgnkicqGIHBsD2qKARkZGrl23bt2/mwXUFJAgCPZxzp1ORL0AZgBQCzwSRdGFuVzu90mU6evrOziVSl0M4Ovx+f8AyBHRQDab/WsSHqPPJAbS1dXVttNOOy0koh4ACwF4sQUeBHCZtfY3ExWu53t7e+el0+mLRORbsYWciDwGYGB4ePjBQqGwNQnfukC6urp26Ojo+AqARQC+A2BWzPRdALeUSqWBm2666U9JBDU6EwTB50VkJYClAHbU8yKyGcC9RLS+WCw+VigUPqzFZzsg8avP8zzvcBFRAIcD2CG+XBaRJ0Tkdufcnfl8Xl2h5dTb2zvD87wlnuedKCJHElEqFqLZ7kkAjzvnnhoeHn5utLW2A2KMUcRTR2n3XwBPOufuB3BXGIZvtVzzOgwzmcyunuctBnAcgPljdWPmyiNjLJASgLSIXENEvwTwNDN/8P9UvpaspUuXTp86dephRHQ0gLMBlJl5SuX8dkB831fzTfU8b9fBwcF/fRwAjNWhu7v7k21tbf/UOsTM06sCMcZs0UCLoqgzl8u9/nEEkslk5nie9yqAIjNXks/2ruX7/t+J6NNEtF82m21JNmr1Y2QymQM9z3sRwEZmnlPLIn8EcIBzbn4Yhk81o4Rmvo6OjsUicjwRaRWfrXyIaEhEnvc8b/3mzZvvTlofxupgjDkSgNaZF5j5i7Vi5HEiWiAii6y190wUiO/7JxDRNQB2b3D3DSI6O5vNrm9CxhIiugPAw8ysgb+NxmatW7T9BrCKmW+YgBDP933NdN+L77yklVlEHh0eHt6ov5sxY8acdDqttel0APvp70TkOmvtOQBcUlnGGO2urxaRnLU2UwvIZQB+ICJXW2u/n5S57/vXKggR2UpE5xaLxTWFQiGqdr+rqys1a9aslc65q4moDcC1zKzpNBH5vn993KRexMzaq1W1iCK0ANYz8wlJOPu+r7GgLlJyzi0Mw/CR0feMMdpQgpnHpvqjADxIRFOIaHFSN/N9X4ezo0XkJGvt7VWBLF++/FDn3NMAXmbmzzUCEge2dqoaE1XdsRYQ5W2MOQPAagBvFIvFfZIkAGOMloXdnXMHhWGoyWm8Rfr6+mZ5nvcOEUVbt26dsXbtWm1RalIQBCeJyM8BvFQsFr9QzZ3qAdEYNca8AOAgIjo5m83eVk/eKP22tre3z1y9evVIVSDxK/0NwJ7OuUPCMPxdPca+7xfULQCsZOY11c42AALf91cS0Y0ACsy8pIG8o4noIRF51lp78Oiz49p4Y4z63XdF5Cxr7XX1GBtjXgPQKSJzrbWvNAOkt7d3bjqdfhnAa8y8ZwMgPyYinV1WW2vPbARkm9+KyD3WWp1DapIxRl2vvVgstlfzb2PMvgD+XC3YK0xXrVrVPjIyonxGmHl05z1Oru/7TxKRjhjj6tw4i8QDzgbtZWbPnr1zf39/zRxfD4gx5jQRuZGItLHbwMz7V3uRpEBOOeWUHadNm/Y2gFQ6nd5l7MKi6oRojHkDwGd0sGJmzWJVqeJa5XJ533w+/5c4xnSLogC69WcRWUtEp9caB0ZZra5rGWO6ANyp8xEzHzFWoVpABnQ31agwVgv2IAi0zyqIyPsxgJsb+H2iYDfGaEY7EcA5zPyzREB83z+KiLSwvR53mNuK2lgalX43FIvFgyrp1xjzIyIqJOigNf3+AcCBzrmTwzCsmn7joeqteFbaY3BwcCgREG0jOjo61L1mi8gCa60u28bR6IIoImdaa7W4JSbf91cR0fWNCmIQBD0ikgfwKDNrRzCOam5RjDFXADhPRG611mojWZWCIFgkIneJiI7JC621v0qCJAiCr4mIrpLSzrnFYRjW7ISNMVrPvuScOzEMQ+18kwPp6+vbO5VKaQCXPM/bvd7oW2kaAegO6lxm1gJX1R21mvu+fwYR/RSAztx1m8ZMJvNlz/N+C0DH2z2YWR8sORA9aYx5QF9ZRC6x1l5Y56XV13UO0TZerfyiiHA6nX5048aN29r4zs7OznK5/FUiCjQmYqDXMbO28bVAa+VfT0THA/ghM19eS4e6C7ogCOaLiMaHLpnnMLPO9DUpk8ks8jxPM0rDwco5d3Y9d1Ihuid2zukKdgsRddaT33Blaox5QjfoAC5m5osa+b8mgJkzZ57geZ6+oo66n9I7OuoCeM45d8+WLVsSjbrGGF1J6W74Ama+tJ7sJEAO0yIkIh+kUqm51VJfI3DN/L1SAkRk0/Dw8NxCofDepIDEsXIXAB20bmfmk5pRbCJ3uru7p7a1temssY+I9Fhr1za639AiymD58uWdURS9FPdNxzPzvY0YT+bvvu9fTEQX6K7ZWqtzfs1kUJGTCEhsFZ3hr9Q0mEql9mvFV6ZqYOMAf0bTfhRFB+bzeV3GNaTEQOJqr7uuQwDczcw6ULWUtMOdPn368wD21lTOzFr1E1FiILFV9gLwLIAOrfrMfFUiKQkPVYY6APczs36PaehSE3atygXf9/XL0n3xLmohMz+cUM+6x7TRBNAP4NVUKjVvoq47IYtUNDHG/ASAVvp3oyhakMvldIHQNAVBcKpzbh0RvR9F0fxm+DUFJO6XdGBaBuDNcrm8oDJYTRSNMUZdSAcmRFF0XC6Xe2iiPPR8s0DQ39+fHhoauo+IvqmZrFQqHTXR74kKQkTuIKK0fhdl5rpDWD2ATQNRpvHH0rsBHCMib0dR9O18Pq+dakPKZDJ9nucN6tdh55wJwzDX8FKdA5MCEoPRzwi6pNPK/6GI9I5eZY6V3d/f723atOlSEdH/lND9cGYylmg6a1V7FFVuaGjoKiLa1pKLyA2lUum8sZvKnp6eXaZMmaLucwyA90RkibX2F5OxREuBVJhlMpkez/P0c4RuUjZEUeRXXC0IgmNFJAtgNxHRxZ7upnRebwlN2rXGatHX17d/KpVSVztAa42I3Bb3aJqd1FwPOOdOy+Vy+s8ALaOWAxkVNxdo9ddNZKztuxoX1loN8JbTRwKkoqUxZi8R0U5WnHPnh2H4j5YjiBn+DxTLpG8FcaEaAAAAAElFTkSuQmCC" alt="" />
              <p className='under_text_info'>1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple: CareS.vn(xem chi tiết).</p>
            </div>
            <div className="line4">
              <img className = 'img_aboard_src' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAyCAYAAADWU2JnAAAABHNCSVQICAgIfAhkiAAAAWRJREFUWEftmcFNw0AQRf+sG6ADoAJCBUAHlJDL7hW7ApIOcrS8PpgKKAHTQaiAlOBcfdhBIxHJRgFpbWT7MHuLtM78efu0hx0CAOfcM4A1gCv5PdVi5oaIamNMluf5gZxzGwASZrbFzHvv/a2E+ZyayLmuQwgPEoZnQ9IvnC0pzHbRYbIQwn6qYzPG7ADcfNfrkxGJyrKspwpjra2J6E7D/CSuZH5zUMkomdj7SZ1RZ9SZWALqTCwxvWfUGXUmloA6E0tM7xl1Rp2JJaDOxBL7855h5hTAZC9XAHZEtDr7WBTb2T/vX/YDY2yzL23bplVVNc65RwCvsX/Q2T+KzLEoiotucWutOPA0MNDwMMz87r2/7xYeOYcYHkZCGGOuZRpyCmStfSOiXsAISluy1h6I6DLio+5WCbIJITTGGBkRiTeD1mmQMfuIB8BHURQrkjbkrJl5PYLQIBoAjsxcJ0mSynF/AXY82KKEipF6AAAAAElFTkSuQmCC" alt="" />
              <p className='under_text_info'>Giá sản phẩm đã bao gồm VAT</p>
            </div>
          </div>
          
          <div className="info_product_right">
          <div className="info_product_location">
            <div className="ifpl_HN">
              <p className='ifpl_text'>Hà Nội</p>
            </div>
            <div className="ifpl_DongDa"> 
              <p className='ifpl_text'>Đống Đa</p>
            </div>
          </div>
            <p className='ifpl_text_under_location'>Có <strong>3</strong> cửa hàng có sản phẩm</p>
            <div className="ifp_contact">
              <div className="ifp_contact_list_1">
                <a className="number_contact" href="tel:02471010384">02471010384</a>
                <a className='location_contact' href='https://g.page/r/CezB_XkISd9KEAI/' target = "_ blank"> - 282 Minh Khai, Q. Hai Bà Trưng</a>
              </div>
              <div className="ifp_contact_list_2">
              <a className="number_contact" href="tel:02471066119">02471066119</a>
                <a className='location_contact' href='https://g.page/cps21th?share' target = "_ blank"> - 21Thái Hà, Trung Liệt, Đống Đa</a>
              </div>
              <div className="ifp_contact_list_3">
              <a className="number_contact" href="tel:02471003133">02471003133</a>
                <a className='location_contact' href='https://g.page/r/CZcTd_IfEBt9EBA' target = "_ blank"> - 133 Thái Hà, Trung Liệt, Đống Đa</a>
              </div>
              <div className="ifp_contact_list_3">
              <a className="number_contact" href="tel:02471003133">02471003133</a>
                <a className='location_contact' href='https://g.page/cps524hn?share' target = "_ blank"> - 516 Bạch Mai,Trương Định</a>
              </div>
              <div className="ifp_contact_list_3">
              <a className="number_contact" href="tel:02471003133">02471003133</a>
                <a className='location_contact' href='https://g.page/cps51hn?share' target = "_ blank"> - 51 Đại Cồ Việt, Lê Đại Hành</a>
              </div>
              <div className="ifp_contact_list_3">
              <a className="number_contact" href="tel:02471003133">02471003133</a>
                <a className='location_contact' href='https://g.page/r/CZ_YoyqrxPaXEBA' target = "_ blank"> - 124 - 126 - 128 Lạc Long Quân</a>
              </div>
              <div className="ifp_contact_list_3">
              <a className="number_contact" href="tel:02471003133">02471003133</a>
                <a className='location_contact' href='https://g.page/cps384hn?gm' target = "_ blank"> - 384 Xã Đàn, Nam Đồng</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="buy_with">
          <div className="bw_prod_1">
            {/* <img className='img_bw_prod' src={bw_prod1} alt="" /> */}
            <p className='text_bw_prod'>Hub Ugreen USB-C to 2 x USB-A 2.0 + USB-A ... </p>
            <p className='strongtext_bw_prod_up'>Giá niêm yết: 416.000đ</p>
            <p className='strongtext_bw_prod_down'>Giá mua kèm: 320.000đ</p> 
            <button className='bn_button'>Thêm ngay</button>          
          </div>
          <div className="bw_prod_1">
          {/* <img className='img_bw_prod' src={bw_prod2} alt="" /> */}
            <p className='text_bw_prod'>HUB Chuyển Đổi Ugreen Type C 6 in 1 CM195... </p>
            <p className='strongtext_bw_prod_up'>Giá niêm yết: 950.000đ</p>
            <p className='strongtext_bw_prod_down'>Giá mua kèm: 800.000đ</p> 
            <button className='bn_button'>Thêm ngay</button>          

          </div>
          <div className="bw_prod_1">
          {/* <img className='img_bw_prod' src={bw_prod3} alt="" /> */}
            <p className='text_bw_prod'>Củ sạc Anker PowerPort III 3 cổng 65W A2667 ... </p>
            <p className='strongtext_bw_prod_up'>Giá niêm yết: 1.150.000đ</p>
            <p className='strongtext_bw_prod_down'>Giá mua kèm: 700.000đ</p>  
            <button className='bn_button'>Thêm ngay</button>          

          </div>
          <div className="bw_prod_1">
          {/* <img className='img_bw_prod' src={bw_prod4} alt="" /> */}
            <p className='text_bw_prod'>Cáp USB-C to USB-C Anker Powerline Flow ... </p>
            <p className='strongtext_bw_prod_up'>Giá niêm yết: 350.000đ</p>
            <p className='strongtext_bw_prod_down'>Giá mua kèm: 240.000đ</p>  
            <button className='bn_button'>Thêm ngay</button>          

          </div>
        </div>
      </div>
      <div className='under_header_rig'>
        <div className='under_header_right'>
          <div className='type_product_box'>
            <p className='version_1'>{item.version_1}</p>
            <p className='ver_1_price'>{item.ver_1_price}</p>
          </div>
          <div className='type_product_box'>
            <p className='version_2'>{item.version_2}</p>
            <p className='ver_2_price'>{item.ver_2_price}</p>
          </div>
          <div className='type_product_box'>
            <p className='version_3'>{item.version_3}</p>
            <p className='ver_3_price'>{item.version_3}</p>
          </div>
        </div>
        <div className='under_header_rig_chose_type'>
          <p className='under_header_right_text'>Chọn màu để xem giá và chi nhánh có hàng</p>
          <div className='under_header_right_color'>
            <div className='type_color_product_box'>
              <img className='img_type_lap' src={item.type_lap_1} alt="" />
                <div className='type_color_product_box_small'>
                  <p className='text_color_in_box'>{item.text_color_in_box_1}</p>
                  <p className='price_color_in_box'>{item.price_lap_type_1}</p>
                </div>
            </div>
            <div className='type_color_product_box'>
            {/* <img className='img_type_lap' src={item.type_lap_2} alt="" /> */}
                <div className='type_color_product_box_small'>
                  <p className='text_color_in_box'>{item.text_color_in_box_2}</p>
                  <p className='price_color_in_box'>{item.price_lap_type_2}</p>
                </div>
            </div>
            <div className='type_color_product_box'>
            <img className='img_type_lap' src={item.type_lap_3} alt="" />
                <div className='type_color_product_box_small'>
                  <p className='text_color_in_box'>{item.text_color_in_box_3}</p>
                  <p className='price_color_in_box'>{item.price_lap_type_3}</p>
                </div>
            </div>
            
          </div>
          <div className='under_header_option'>
              <div className="under_header_option_box">
                <img className='tc_icon' src={item.tradecoin_icon} alt="" />
                <div   className="under_header_option_left" >
                  <p className='uhol_price'>{item.uhol_price_1}</p>
                  <p className='uhol_text'>Khi thu cũ lên đời</p>
                </div>
                <div  className="under_header_option_right">
                  <p className="uhor_price">{item.uhol_price_2}</p>
                  <p className='uhor_text'>Ưu đãi sự kiện</p>
              
              </div>
              </div>
              
          </div>
          <div className="save_for_user">
              <div className="sfu_text_up">Tiết kiệm thêm đến <strong className='strong_text'>187.000đ</strong> cho Smember</div>
              <a href='/' className="sfu_text_down">Kiểm tra giá cuối cùng của bạn </a> {'>'}
          </div>
        </div>
        <div>
          <div className='banner_mac_air_m1'>
            <img className='banner_mac_air_m1_img' src={banner_mac_air_m1} alt="" />
          </div>
        </div>
        <div className='sale_box'>
            <img src="" alt="" />
            <p className='sale_text'>Khuyến mãi</p>
            <div className="info_sale_box">
              <a className='text_info_line' href="/">
                <p className="text_info">Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k (Xem chi tiết)</p>
              </a>
            </div>
        </div>
        <div className='buy_area'>
        <button className="button_buy">
          <p className='buy_text_up'>Mua ngay</p>
          <p className='buy_text_down'>Giao ngay trong 2 giờ hoặc nhận tại cửa hàng</p>
        </button>

        <div className='cart'>
          <img className='cart_icon' src={giohang} alt="" />
          <p className='cart_text'>Them vao gio</p>
        </div>
        </div>
        <div className='isment'>
          <div className="isment_left">
            <p className='isment_buy_text_up'>TRẢ GÓP 0%</p>
            <p className='isment_small_text_down'>Trả trước chỉ từ 5.577.000₫</p>
          </div>
          <div className="isment_right">
            <p className='isment_buy_text_up'>TRẢ GÓP 0% QUA THẺ</p>
            <p className='isment_small_text_down'>(Không phí chuyển đổi 3 - 6 tháng)</p>
          </div>

        </div>

      </div>
      
     
    </div> 
    <div className="evaluate">
        <div className="evaluate_box1">
          <div className="head_text_box1">{item.evaluate_head_text}</div>
          <div className="under_head_text_evaluate">
            <div className="vote_evaluate">
            <p className="text_on_vote_evaluate">{item.vote_evaluate}</p>
              <div className="list_star">
                <img className="img_icon_star" src={item.star_icon} alt="" />
                <img className="img_icon_star" src={item.star_icon} alt="" />
                <img className="img_icon_star" src={item.star_icon} alt="" />
                <img className="img_icon_star" src={item.star_icon} alt="" />
                <img className="img_icon_star" src={item.star_icon} alt="" />
              </div>
              <p className="text_under_vote_evaluate">{item.number_vote}</p>
            </div>
            <div className="detail_evaluate">
              <div className="progress_1">
                <p className="text_progress">5</p>
                <img className="img_icon_star" src={item.star_icon} alt="" />
                <progress max="100" className="progress" value="93" ></progress>
                <p className="text_end_progress">{item.vote_5}</p>
              </div>
              <div className="progress_1">
                <p className="text_progress">4</p>
                <img className="img_icon_star" src={item.star_icon} alt="" />
                <progress max="100" className="progress" value="5" ></progress>
                <p className="text_end_progress">{item.vote_4}</p>
              </div>
              <div className="progress_1">
                <p className="text_progress">3</p>
                <img className="img_icon_star" src={item.star_icon} alt="" />
                <progress max="100" className="progress" value="0" ></progress>
                <p className="text_end_progress">{item.vote_3}</p>
              </div>
              <div className="progress_1">
                <p className="text_progress">2</p>
                <img className="img_icon_star" src={item.star_icon} alt="" />
                <progress max="40" className="progress" value="0" ></progress>
                <p className="text_end_progress">{item.vote_2}</p>
              </div>
              <div className="progress_1">
                <p className="text_progress">1</p>
                <img className="img_icon_star" src={item.star_icon} alt="" />
                <progress max="40" className="progress" value="0" ></progress>
                <p className="text_end_progress">{item.vote_1}</p>
              </div>
            </div>
          </div>
          <div className="exper">
            <p className="head_text">Đánh giá theo trải nghiệm</p>
            <div className="exper_flex_box">
              <div className="exper_under_left">
                  <p className="under_head_text">Thời lượng pin</p>
                  <p className="under_head_text">Hiệu năng</p>
                  <p className="under_head_text">Chất lượng hiển thị của màn hình</p>
              </div>
              <div className="nonflex_box">
                <div className="exper_under_right">
                      <img className="img_icon_star" src={item.star_icon} alt="" />
                      <img className="img_icon_star" src={item.star_icon} alt="" />
                      <img className="img_icon_star" src={item.star_icon} alt="" />
                      <img className="img_icon_star" src={item.star_icon} alt="" />
                      <img className="img_icon_star" src={item.star_icon} alt="" />
                      <p className="text_in_under_right">5/5</p>
                </div>
                <div className="exper_under_right">
                      <img className="img_icon_star" src={item.star_icon} alt="" />
                      <img className="img_icon_star" src={item.star_icon} alt="" />
                      <img className="img_icon_star" src={item.star_icon} alt="" />
                      <img className="img_icon_star" src={item.star_icon} alt="" />
                      <img className="img_icon_star" src={item.star_icon} alt="" />
                      <p className="text_in_under_right">5/5</p>
                </div>
                <div className="exper_under_right">
                      <img className="img_icon_star" src={item.star_icon} alt="" />
                      <img className="img_icon_star" src={item.star_icon} alt="" />
                      <img className="img_icon_star" src={item.star_icon} alt="" />
                      <img className="img_icon_star" src={item.star_icon} alt="" />
                      <img className="img_icon_star" src={item.star_icon} alt="" />
                      <p className="text_in_under_right">5/5</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className='evaluate_box2'>
          <div className='head_text_box2'>Thông số kỹ thuật</div>
          <div className='under_head_text_box2'>
            <div className='uhtb_row1'>
              <div className='uhtb_row1_left'>Loại card đồ họa
              </div>
              <div className='uhtb_row1_right'>{item.card_type}
              </div>
            </div>
            <div className='uhtb_row2'>
            <div className='uhtb_row1_left'>Dung lượng RAM
              </div>
              <div className='uhtb_row1_right'>{item.capacity}
              </div>
            </div>
            <div className='uhtb_row3'>
            <div className='uhtb_row1_left'>Loại RAM
              </div>
              <div className='uhtb_row1_right'>{item.RAM_type}
              </div>
            </div>
            <div className='uhtb_row4'>
            <div className='uhtb_row1_left'>Ổ cứng
              </div>
              <div className='uhtb_row1_right'>{item.hard_drive}
              </div>
            </div>
            <div className='uhtb_row5'>
            <div className='uhtb_row1_left'>Kích thước màn hình
              </div>
              <div className='uhtb_row1_right'>{item.inches}
              </div>
            </div>
            <div className='uhtb_row6'>
            <div className='uhtb_row1_left'>Công nghệ màn hình
              </div>
              <div className='uhtb_row1_right'>{item.screen_tech}
              </div>
            </div>
            <div className='uhtb_row7'>
            <div className='uhtb_row1_left'>Pin 
              </div>
              <div className='uhtb_row1_right'>{item.battery}
              </div>
            </div>
            <div className='uhtb_row8'>
            <div className='uhtb_row1_left'>Cổng giao tiếp
              </div>  
              <div className='uhtb_row1_right'>{item.port}
              </div>
            </div>
            <div className='uhtb_row9'>
            <div className='uhtb_row1_left'>Tính năng khác
              </div>  
              <div className='uhtb_row1_right'>{item.other_function}
              </div>
            </div>
          </div>
        </div>
        
      </div>
      </>
      
        ))}
    
</>
  )
}
 
export default mac1_gen;
