import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Data from "/home/minh/Typescript/author/src/Detail/mac_list_produce/list_ant_design"
import '../Detail.scss';
import giohang from "/home/minh/Typescript/author/src/image/gio_hang.jpg"
import AutoPlay from '/home/minh/Typescript/author/src/Detail/mac_list_produce/autoplay'

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
                <div   className="under_header_option_left" >
                  <p className='uhol_price'>16.190.000₫</p>
                  <p className='uhol_text'>Khi thu cũ lên đời</p>
                </div>
                
              </div>
              
          </div>
</>,
    children: 
    <>
    
    <div className="under_ant_tab_left">
        
        <div className='sale_box'>
            <img src="" alt="" />
            <p className='sale_text'>Ưu đãi khi thu cũ đổi mới</p>
            <div className="info_sale_box">
              <a className='text_info_line' href=" ">
                <p className="text_info">Tiết kiệm thêm đến<strong> 152.000đ </strong>cho M-memmber</p>
                <p className="text_info2">hoặc <strong> 400.000đ </strong> cho M-Student</p>
              </a>
            </div>
        </div>
        <div className='autoplay_banner'>
          {/* <img className='banner_mac_air_m1_img' src={banner_recived} alt="" /> */}
              <div className='banner_mac_air_m1_img'>
                    <AutoPlay/>
              </div>
        </div>
        <button className='recive_old'>
            <p className='ro_up_text'>Thu cũ lên đời</p>
            <p className='ro_down_text'>Chỉ từ 11.190.000đ</p>
        </button>
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
        

        <div className='footer_ant_tab'>
          <div className='head_footer_ant_tab'><p className='head_footer_ant_text'>ƯU ĐÃI THÊM</p></div>
            <div className='head_footer_ant_tab_data'>
            <Data/>
            </div>
        </div>
      </div>
      
    
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
    
    <div className='under_ant_tab_right' >
        <div className='autoplay_banner'>
          {/* <img className='banner_mac_air_m1_img' src={banner_recived} alt="" /> */}
              <div className='banner_mac_air_m1_img'>
                    <AutoPlay/>
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
