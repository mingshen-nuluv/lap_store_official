import logo_store from "../image/lap_store_fix-removebg-preview.png";

const Header = () => {
  return (
    <>
      <section className="fixed_header_box">
        <div className="upside_head">
          <img
            className="slogan_head"
            src={"./assets/slogan_head1.jpg"}
            alt=""
          ></img>
          <img
            className="slogan_head"
            src={"./assets/slogan_head2.jpg"}
            alt=""
          ></img>
          <img
            className="slogan_head"
            src={"./assets/slogan_head3.jpg"}
            alt=""
          ></img>
          <img
            className="slogan_head"
            src={"./assets/slogan_head2.jpg"}
            alt=""
          ></img>
        </div>

        <div className="under_header">
          <div className="logo">
            <a href="/">
              <img
                className="logo_store"
                src={logo_store}
                alt=""
                title="Trang Chủ"
              ></img>
            </a>
          </div>
          <div className="call_to_buy">
            <a href="tel:+849888888888">
              <button className="custom_help" title="Gọi ngay để được hỗ trợ">
                Tổng đài hỗ trợ 09888888888
              </button>
            </a>
          </div>
          <div className="spin_layer"></div>

          <div className="search">
            <div className="search-box">
              <input
                className="search-box-input"
                type="text"
                placeholder="Bạn cần tìm gì?"
              />
              <input
                className="search-box-button"
                type="button"
                defaultValue="Tìm kiếm"
              />
            </div>
          </div>
          <div className="signin">
            <a href="/signin">
              <button className="signin_button">Đăng Nhập</button>
            </a>
          </div>
          <div className="signup">
            <a href="/signup">
              <button className="signup_button">Đăng Ký</button>
            </a>
          </div>
          <div className="profile"></div>
        </div>
      </section>

      <section className="body-contaner">
        <div className="body-box">
          <a
            className="help_contact"
            href="https://www.facebook.com/nhatminh.bigbro01/"
            target="_ blank"
          >
            <img
              className="hc_icon"
              src={"./assets/fb_icon_position.png"}
              alt=""
            />
          </a>
          <div className="navbar">
            <div className="home">
              <a href="/" className="navbar_text">
                TRANG CHỦ
              </a>
            </div>
            <div className="list">
              <a href=" " className="navbar_text">
                DANH MỤC
              </a>
            </div>
            <div className="news">
              <a href=" " className="navbar_text">
                TIN TỨC
              </a>
            </div>
            <div className="intro">
              <a href=" " className="navbar_text">
                GIỚI THIỆU
              </a>
            </div>
            <div className="contact">
              <a href=" " className="navbar_text">
                LIÊN HỆ
              </a>
            </div>
            <div className="profiles">
              <a href="/profile" className="navbar_text">
                THÔNG TIN
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
