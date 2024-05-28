import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import '../Detail.css';
import banner_mac_air_m1 from "/home/minh/Typescript/author/src/image/tragop_mac_air_m1.jpg"
import giohang from "/home/minh/Typescript/author/src/image/gio_hang.jpg"


const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 
    <>
    <div className='under_header_option'>
              <div className="under_header_option_box">
                <img className='tc_icon' src='image/tradecọin_icon2icon2.png' alt="" />
                <div   className="under_header_option_left" >
                  <p className='uhol_price'>16.190.000₫</p>
                  <p className='uhol_text'>Khi thu cũ lên đời</p>
                </div>
                
              </div>
              
          </div>
</>,
    children: 
    <>
    
    {/* <div>
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

      </div> */}
    
    </>
,
  },
  {
    key: '2',
    label: 
    <>
    
    <div  className="under_header_option_right">
                  <p className="uhor_price">18.690.000 đ</p>
                  <p className='uhor_text'>Ưu đãi sự kiện</p>
              
              </div>
    
    
    
    </>,
    children: <>
    
    <div>
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
    
    
    </>,
  },
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;
