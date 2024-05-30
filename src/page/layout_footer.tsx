import '../page/index.scss';
import { Outlet } from "react-router-dom";
import logo_store from "../image/lap_store_fix-removebg-preview.png"
import slogan_head1 from "../image/slogan_head1.jpg"
import slogan_head2 from "../image/slogan_head2.jpg"
import slogan_head3 from "../image/slogan_head3.jpg"
import icon_news from "../image/icon.jpeg"
import list_news1 from "../image/list_new_1.jpg"
import list_news2 from "../image/list_new_2.jpg"
import list_news3 from "../image/list_new_3.jpg"
import list_news4 from "../image/list_new_4.jpg"
import list_news5 from "../image/list_new_5.jpg"
import pay_method_1 from "../image/payment_method1.jpg"
import pay_method_2 from "../image/payment_method2.jpg"
import pay_method_3 from "../image/payment_method3.jpg"
import pay_method_4 from "../image/payment_method4.jpg"
import pay_method_5 from "../image/payment_method5.jpg"
import pay_method_6 from "../image/payment_method6.jpg"
import pay_method_7 from "../image/payment_method7.jpg"
import pay_method_8 from "../image/payment_method8.jpg"
import pay_method_9 from "../image/payment_method9.jpg"
import youtube_icon from "../image/youtube_icon.jpg"
import facebook_icon from "../image/facebook_icon.jpg"
import ig_icon from "../image/ig_icon.jpg"
import tiktok_icon from "../image/tiktok_icon.jpg"
import zalo_icon from "../image/zalo_icon.jpg"
import dienthoaivui_icon from "../image/dienthoaivui_icon.jpg"
import careS_icon from "../image/careS_icon.jpg"
import Schannel_icon from "../image/Schannel_icon.jpg"
import forum_icon from "../image/forum_icon.jpg"
import hc_icon from "../image/fb_icon_position.png"

export function Footer(){
    return(
        <>

<div className='fixed_header_box'>
          
          
          <div  className="upside_head">
                <img className="slogan_head" src={slogan_head1} alt=""></img>
                <img className="slogan_head" src={slogan_head2} alt=""></img>
                <img className="slogan_head" src={slogan_head3} alt=""></img>
                <img className="slogan_head" src={slogan_head2} alt=""></img>
          </div>
            
          <div className="under_header">
          <div className="logo" >
            <a href="/">
            <img className="logo_store" src={logo_store} alt="" title="Trang Chủ"></img>
            </a>
          </div>  
          <div className="call_to_buy">
                <a href="tel:+849888888888">
                <button className='custom_help' title="Gọi ngay để được hỗ trợ">Tổng đài hỗ trợ  09888888888</button>
                </a>
            </div>
            <div className="spin_layer">
            </div>
          
          <div className="search">
            <div className="search-box">
              <input className="search-box-input" type="text"  placeholder="Bạn cần tìm gì?" />
              <input className="search-box-button" type="button"  defaultValue="Tìm kiếm"  />
            </div>
          </div>
              <div className="signin">
                <a href='/signin'>
                  <button className="signin_button">Đăng Nhập</button>
                </a>
              </div>
              <div className="signup">
                <a href='/signup'>
                  <button className="signup_button">Đăng Ký</button>  
                </a>
              </div>
          <div className="profile">
          </div>
          
          
        </div>
          </div>
      <div className="body-contaner">
        <div className="body-box">
          <a className='help_contact' href="https://www.facebook.com/nhatminh.bigbro01/" target="_ blank" >
            <img className="hc_icon" src={hc_icon} alt="" />
          </a>
          <div className="navbar">
            <div className="home">
              <a  href="/" className="navbar_text">TRANG CHỦ</a>
            </div>  
            <div className="list">
              <a  href=" " className="navbar_text">DANH MỤC</a>
            </div>
            <div className="news">
              <a  href=" " className="navbar_text">TIN TỨC</a>
            </div>
            <div className="intro">
              <a  href=" " className="navbar_text">GIỚI THIỆU</a>
            </div>
            <div className="contact">
              <a  href=" " className="navbar_text">LIÊN HỆ</a>
            </div>
            <div className="profiles">
              <a href="/profile" className="navbar_text">THÔNG TIN</a>
            </div>
          </div>
        </div>
      </div>
       
      <Outlet/>
      
      <div className='descriptive_para'>
            <div className='para_left'>
                <div className='para_box_left'>
                  <div> 
                    <div className='text_para_box'> 
                    <strong>Máy tính laptop</strong> là thiết bị công nghệ được rất nhiều người dùng 
                  yêu thích và chọn lựa nhờ vào tính tiện lợi, 
                 đáp ứng tốt nhu cầu học tập, 
                 làm việc và giải trí của nhiều người dùng. 
                 Hiện nay, các thương hiệu máy tính xách tay không ngừng cải tiến 
                 sản phẩm để mang lại một dòng laptop mini giá rẻ mỏng nhẹ, 
                 có hiệu năng mạnh mẽ, thời lượng pin tốt đặc biệt là có một giá thành 
                  vô cùng hợp lý.</div></div> 
                  <p className='h1_para_box_head'>Laptop (máy tính xách tay) - Phục vụ công việc, học tập, giải trí</p>
                  <p className='text_para_box_inherit'>
                    <strong>Laptop</strong> mang thiết kế 
                    <strong> sang trọng</strong>, nhỏ gọn, 
                    <strong> tiện lợi</strong> cùng <strong>cấu hình mạnh mẽ, hiệu năng mượt mà 
                      </strong> nhằm tạo trải nghiệm tốt. Với 
                      <strong> giá thành rẻ </strong> cùng nhiều ưu đãi vượt trội, 
                      máy tính xách tay trở thành sự chọn lựa hoàn hảo của người dùng.</p>
                  <p className='text_para_box'>Ngày nay, laptop được thiết kế với nhiều tính năng, 
                  tiện ích đặc biệt, có thể xoay, 
                  gập và tách rời nhằm đáp ứng nhiều nhu cầu sử dụng khác nhau của người dùng. 
                  Bên cạnh đó, máy tính xách tay còn được trang  bị màn hình cảm ứng 
                  giúp cho các thao tác sử dụng giống hệt máy tính bảng.

                  </p><p className='text_para_box'>Bên cạnh đó, nhiều chiếc laptop Ultrabook được thiết kế 
                  với độ mỏng hơn, cấu hình mạnh hơn. 
                  Không chỉ có độ nhỏ gọn, di động mà máy còn có độ phân giải cao nên rất thích hợp 
                  với doanh nhân.</p>
               </div>

            </div>
            <div className='para_right'>
                <div className='para_box_right'>
                  <img className='icon_news' src = {icon_news} alt="" />
                  <p className='text_para_box_head'> Tin tức chung</p>
                </div>
                <div className='list_para_box_right'>
                      <img className='list_news1' src={list_news1} alt="" />
                      <div className='list_news1_text'>
                        <a className="list_news_text_row" href="/post" >Cách kết nối máy tính bảng với màn hình máy tính chi tiết nhất</a>
                      
                      </div>
                  </div>
                  <div className='list_para_box_right'>
                      <img className='list_news1' src={list_news2} alt="" />
                      <div className='list_news1_text'>
                        <a className="list_news_text_row" href="/post" >Cách kết nối máy tính bảng với màn hình máy tính chi tiết nhất</a>
                      
                      </div>
                  </div>
                  <div className='list_para_box_right'>
                      <img className='list_news1' src={list_news3} alt="" />
                      <div className='list_news1_text'>
                        <a className="list_news_text_row" href="/post" >Cách kết nối máy tính bảng với màn hình máy tính chi tiết nhất</a>
                      
                      </div>
                  </div>
                  <div className='list_para_box_right'>
                      <img className='list_news1' src={list_news4} alt="" />
                      <div className='list_news1_text'>
                        <a className="list_news_text_row" href="/post" >Cách kết nối máy tính bảng với màn hình máy tính chi tiết nhất</a>
                      
                      </div>
                  </div>
                  <div className='list_para_box_right'>
                      <img className='list_news1' src={list_news5} alt="" />
                      <div className='list_news1_text'>
                        <a className="list_news_text_row" href="/post" >Cách kết nối máy tính bảng với màn hình máy tính chi tiết nhất</a>
                      </div>
                  </div>
              </div> 
          </div>
          <div className="footer">
              <div className="footer_1">
                <p className="footer_head_text">Tổng đài hỗ trợ miễn phí</p>
                <p className="footer_calling">Gọi mua hàng
                <a className="tel" href="tel:+849888888888">
                  <strong> 1800.2097 </strong> 
                </a>
                (7h30 - 22h00)
                </p>
                <p className="footer_calling">Gọi khiếu nại 
                <a className="tel" href="tel:1800.2063">
                  <strong> 1800.2063 </strong>
                </a>
                 (8h00 - 21h30)</p>
                 <p className="footer_calling">Gọi bảo hành 
                <a className="tel" href="tel:1800.2064">
                  <strong> 1800.2064 </strong>
                </a>
                  (8h00 - 21h00)</p>
                  <p className="footer_head_text">Phương thức thanh toán</p>
                  <img src={pay_method_1} alt="" />
                  <img src={pay_method_2} alt="" />
                  <img src={pay_method_3} alt="" />
                  <img src={pay_method_4} alt="" />
                  <img src={pay_method_5} alt="" />
                  <img src={pay_method_6} alt="" />
                  <img src={pay_method_7} alt="" />
                  <img src={pay_method_8} alt="" />
                  <img src={pay_method_9} alt="" />
                  <p className="footer_head_text1">ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</p>
                  <p className="footer_1_text">(*)Nhận ngay voucher 10%</p>
                  <p className="footer_1_text2">(*)Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới</p>
                  <div className="">
                    <input className="a1234" type="text"  placeholder="Email*" />
                    <input className="pass_1234" type="text"  placeholder="Số điện thoại" />
                    <a href='/' className="forgot_pass_box">
                    </a>
                    <div className="check_box">
                    <input type="checkbox"  />
                    <p className="footer_text_check_box1">Tôi đồng ý với các điều khoản bảo mật cá nhân</p>
                    </div>
                    
                    <input className="footer_signup_button" type="button" defaultValue="Đăng Ký Ngay" />

                </div>
              </div> 
              <div className="footer_2">
                  <p className="footer_head_text">Thông tin và chính sách</p>
                <a href="/">
                  <p className="footer_2_text_2">Mua hàng và thanh toán Online</p>
                </a>
                <a href="/">
                  <p className="footer_2_text_2">Mua hàng trả góp Online</p>
                </a>
                <a href="/" >
                  <p className="footer_2_text_2">Mua hàng trả góp bằng thẻ tín dụng</p>
                </a>
                <a href="/">
                  <p className="footer_2_text_2">Chính sách giao hàng</p>
                </a>
                <a href="/">
                  <p className="footer_2_text_2">Tra điểm Smember</p>
                </a>
                <a href="/">
                  <p className="footer_2_text_2">Xem ưu đãi Smember</p>
                </a>  
                <a href="/">
                  <p className="footer_2_text_2">Tra thông tin bảo hành</p>
                </a>
                <a href="/">
                  <p className="footer_2_text_2">Tra cứu hoá đơn điện tử</p>
                </a>
                <a href="/">
                  <p className="footer_2_text_2">Thông tin hoá đơn mua hàng</p>
                </a>
                <a href="/">
                  <p className="footer_2_text_2">Trung tâm bảo hành chính hãng</p>
                </a>
                <a href="/">
                   <p className="footer_2_text_2">Quy định về việc sao lưu dữ liệu</p>
                </a>
              </div>
              <div className="footer_3">
                <p className="footer_head_text">Dịch vụ và thông tin khác</p>
                <a href="/">
                  <p className="footer_2_text_2">Khách hàng doanh nghiệp (B2B)</p>
                </a>
                <a href="/">
                  <p className="footer_2_text_2">Ưu đãi thanh toán</p>
                </a>
                <a href="/" >
                  <p className="footer_2_text_2">Quy chế hoạt động</p>
                </a>
                <a href="/">
                  <p className="footer_2_text_2">Chính sách bảo mật thông tin cá nhân</p>
                </a>
                <a href="/">
                  <p className="footer_2_text_2">Chính sách Bảo hành</p>
                </a>
                <a href="/">
                  <p className="footer_2_text_2">Liên hệ hợp tác kinh doanh</p>
                </a>
                <a href="/">
                  <p className="footer_2_text_2">Tuyển dụng</p>
                </a>
                <a href="/">
                  <p className="footer_2_text_2">Dịch vụ bảo hành điện thoại</p>
                </a>
                <a href="/">
                  <p className="footer_2_text_2">Dịch vụ bảo hành mở rộng</p>
                </a>
              </div>
              <div className="footer_4">
                <p className="footer_head_text">Kết nối với CellphoneS</p>
                <img className="footer_icon" src={youtube_icon} alt="" />
                <img className="footer_icon" src={facebook_icon} alt="" />
                <img className="footer_icon" src={ig_icon} alt="" />
                <img className="footer_icon" src={tiktok_icon} alt="" />
                <img className="footer_icon" src={zalo_icon} alt="" />
                <p>Website thành viên</p>
                <p className="footer_2_text_2_1">Hệ thống bảo hành sửa chữa Điện thoại - Máy tính</p>
                <img src={dienthoaivui_icon} alt="" />
                <p className="footer_2_text_2_1">Trung tâm bảo hành uỷ quyền Apple</p>
                <img src={careS_icon} alt="" />
                <p className="footer_2_text_2_1">Kênh thông tin giải trí công nghệ cho giới trẻ</p>
                <img src={Schannel_icon} alt="" />
                <p className="footer_2_text_2_1">Trang thông tin công nghệ mới nhất</p>
                <img src={forum_icon} alt="" />
              
              </div>

          </div>
      </>
    )
} 

