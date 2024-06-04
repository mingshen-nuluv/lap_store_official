import React from "react";
import "./home.scss";
import LapItem from "./LapItem";
import data from "./home.json";
import News from "./news";
import Genbrand from "./genbrand"

const Home = () => {
  return (
    <>
        <section className="header">
            <img className="header__banner" src="./assets/banner.jpg" alt="" ></img>
            <img className="header__banner"src="./assets/banner2.jpg" alt=""></img>
            <img className="header__banner" src="./assets/banner3.jpg" alt="" ></img>
        </section>

        <section className="shop">
          <div className="shop__product--noform"><Genbrand /></div>
            <div className="shop__product--form">
              <p className="shop__product--form__head_text">Sản Phẩm Nổi Bật</p>
              <div className="shop__product--form__down">
                {data.map((item, index) => (
                  <LapItem item={item} key={index} />
                ))}
              </div>
            </div>
        </section>

        <section className="des__container">
          <div className="des__container--inner">
            <div className="des__containner--inner--left">
              <div className="text_para_box">
                <strong>Máy tính laptop</strong> là thiết bị công nghệ được rất nhiều người dùng yêu thích và chọn lựa nhờ vào tính tiện lợi, đáp ứng tốt nhu cầu học tập, làm việc và giải trí của nhiều người dùng. Hiện nay, các thương hiệu máy tính xách tay không ngừng cải tiến sản phẩm để mang lại một dòng laptop mini giá rẻ mỏng nhẹ, có hiệu năng mạnh mẽ, thời lượng pin tốt đặc biệt là có một giá thành vô cùng hợp lý.
              </div>
              <p className="h1_para_box_head">
                Laptop (máy tính xách tay) - Phục vụ công việc, học tập, giải
                trí
              </p>
              <p className="text_para_box_inherit">
                <strong>Laptop</strong> mang thiết kế <strong> sang trọng</strong>, nhỏ gọn, <strong> tiện lợi</strong> cùng{" "} <strong>cấu hình mạnh mẽ, hiệu năng mượt mà</strong> nhằm tạo trải nghiệm tốt. Với <strong> giá thành rẻ </strong> cùng nhiều ưu đãi vượt trội, máy tính xách tay trở thành sự chọn lựa hoàn hảo của người dùng.
              </p>
              <p className="text_para_box"> Ngày nay, laptop được thiết kế với nhiều tính năng, tiện ích đặc biệt, có thể xoay, gập và tách rời nhằm đáp ứng nhiều nhu cầu sử dụng khác nhau của người dùng. Bên cạnh đó, máy tính xách tay còn được trang bị màn hình cảm ứng giúp cho các thao tác sử dụng giống hệt máy tính bảng.
              </p>
              <p className="text_para_box"> Bên cạnh đó, nhiều chiếc laptop Ultrabook được thiết kế với độ mỏng hơn, cấu hình mạnh hơn. Không chỉ có độ nhỏ gọn, di động mà máy còn có độ phân giải cao nên rất thích hợp với doanh nhân.
              </p>
            </div>
          </div>
          <div className="para_right">
            <div className="para_box_right">
              <img className="icon_news" src="./assets/icon.jpeg" alt="" />
              <p className="text_para_box_head"> Tin tức chung</p>
            </div>
            <News />
          </div>
        </section>
    </>
  );
};

export default Home;
