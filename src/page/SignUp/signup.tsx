import React from "react";
import "./signup.scss";

const SignUp = () => {
  return (
    <>
      <div className="back_button">
        <a href="/">
          <img
            className="back_button_img"
            src="./assets/back_button.jpg"
            alt=""
          ></img>
        </a>
      </div>
      <div className="pic_signup">
        <img className="pic_sign_up" src="./assets/pic_signup.jpg" alt=""></img>
      </div>
      <p className="sign_up_head_text">Đăng ký với</p>
      <div className="option_signup">
        <div className="option1">
          <img
            className="option_signup_pic1"
            src="./assets/google.jpg"
            alt=""
          ></img>
          <p className="text_option">Google</p>
        </div>
        <div className="option2">
          <img
            className="option_signup_pic2"
            src="./assets/zalo.jpg"
            alt=""
          ></img>
          <p className="text_option">Zalo</p>
        </div>
      </div>
      <div className="or_line">
        <div className="line1"></div>
        <p className="text_line">hoặc</p>
        <div className="line2"></div>
      </div>
      <div className="under-body">
        <div className="under-body-contaner-left">
          <div className="head-body-contaner"></div>
          <div className="signup-box">
            <input
              className="underbody-box-input-name"
              type="text"
              placeholder="Tên Đăng Nhập..."
            />
            <input
              className="underbody-box-input-pw"
              type="text"
              placeholder="Mật khẩu..."
            />
            <p className="note">
              (*) Mật khẩu tối thiểu 6 ký tự, có ít nhất 1 chữ và 1 số. (VD:
              12345a)
            </p>
            <input
              className="underbody-box-input-phone"
              type="text"
              placeholder="Số điện thoại..."
            />
            <input
              className="underbody-box-input-address"
              type="text"
              placeholder="Địa chỉ..."
            />
            <input
              className="underbody-box-input-mail"
              type="text"
              placeholder="Gmail...(hông bắt buộc)"
            />
            <p className="note">
              *Hóa đơn VAT khi mua hàng sẽ được gửi qua email này
            </p>
            <div className="checkbox_footer">
              <input className="underbody_checkbox1" type="checkbox" />
              <p className="text_underbody_checkbox">
                Đăng ký nhận bản tin khuyến mãi từ MingShen
              </p>
            </div>
            <div className="checkbox_footer">
              <input className="underbody_checkbox2" type="checkbox" />
              <p className="text_underbody_checkbox">
                Tôi đồng ý với các điều khoản bảo mật cá nhân
              </p>
            </div>
            <input
              className="underbody-box-input-signup"
              type="button"
              defaultValue="Đăng Ký"
            />
          </div>
          <div className="bottom_signup">
            <p className="bottom_text">Bạn đã có tài khoản?</p>
            <a href="./signin" className="forgot_pass_box">
              <p className="chang_to_signup">Đăng nhập ngay</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
