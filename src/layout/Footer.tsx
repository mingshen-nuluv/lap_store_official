const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_1">
          <p className="footer_head_text">Tổng đài hỗ trợ miễn phí</p>
          <p className="footer_calling">
            Gọi mua hàng
            <a className="tel" href="tel:+849888888888">
              <strong> 1800.2097 </strong>
            </a>
            (7h30 - 22h00)
          </p>
          <p className="footer_calling">
            Gọi khiếu nại
            <a className="tel" href="tel:1800.2063">
              <strong> 1800.2063 </strong>
            </a>
            (8h00 - 21h30)
          </p>
          <p className="footer_calling">
            Gọi bảo hành
            <a className="tel" href="tel:1800.2064">
              <strong> 1800.2064 </strong>
            </a>
            (8h00 - 21h00)
          </p>
          <p className="footer_head_text">Phương thức thanh toán</p>
          <img src={"./assets/payment_method1.jpg"} alt="" />
          <img src={"./assets/payment_method2.jpg"} alt="" />
          <img src={"./assets/payment_method3.jpg"} alt="" />
          <img src={"./assets/payment_method4.jpg"} alt="" />
          <img src={"./assets/payment_method5.jpg"} alt="" />
          <img src={"./assets/payment_method6.jpg"} alt="" />
          <img src={"./assets/payment_method7.jpg"} alt="" />
          <img src={"./assets/payment_method8.jpg"} alt="" />
          <img src={"./assets/payment_method9.jpg"} alt="" />

          <p className="footer_head_text1">ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</p>
          <p className="footer_1_text">(*)Nhận ngay voucher 10%</p>
          <p className="footer_1_text2">
            (*)Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới
          </p>
          <div className="">
            <input className="a1234" type="text" placeholder="Email*" />
            <input
              className="pass_1234"
              type="text"
              placeholder="Số điện thoại"
            />
            {/* <a href="/" className="forgot_pass_box"></a> */}
            <div className="check_box">
              <input type="checkbox" />
              <p className="footer_text_check_box1">
                Tôi đồng ý với các điều khoản bảo mật cá nhân
              </p>
            </div>

            <input
              className="footer_signup_button"
              type="button"
              defaultValue="Đăng Ký Ngay"
            />
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
          <a href="/">
            <p className="footer_2_text_2">
              Mua hàng trả góp bằng thẻ tín dụng
            </p>
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
          <a href="/">
            <p className="footer_2_text_2">Quy chế hoạt động</p>
          </a>
          <a href="/">
            <p className="footer_2_text_2">
              Chính sách bảo mật thông tin cá nhân
            </p>
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
          <img
            className="footer_icon"
            src={"./assets/youtube_icon.jpg"}
            alt=""
          />
          {/* <img className="footer_icon" src={facebook_icon} alt="" /> */}
          <img className="footer_icon" src={"./assets/ig_icon.jpg"} alt="" />
          <img
            className="footer_icon"
            src={"./assets/tiktok_icon.jpg"}
            alt=""
          />
          <img className="footer_icon" src={"./assets/zalo_icon.jpg"} alt="" />
          <p>Website thành viên</p>
          <p className="footer_2_text_2_1">
            Hệ thống bảo hành sửa chữa Điện thoại - Máy tính
          </p>
          <img src={"./assets/dienthoaivui_icon.jpg"} alt="" />
          <p className="footer_2_text_2_1">Trung tâm bảo hành uỷ quyền Apple</p>
          <img src={"./assets/careS_icon.jpg"} alt="" />
          <p className="footer_2_text_2_1">
            Kênh thông tin giải trí công nghệ cho giới trẻ
          </p>
          <img src={"./assets/Schannel_icon.jpg"} alt="" />
          <p className="footer_2_text_2_1">
            Trang thông tin công nghệ mới nhất
          </p>
          <img src={"./assets/forum_icon.jpg"} alt="" />
        </div>
      </div>
    </>
  );
};
export default Footer;
