
import React from 'react';
import '../page/index.scss';
import pic_sign_up from "../image/pic_signup.jpg"
import back_button from "../image/back_button.jpg"
import google from "../image/google.jpg"
import zalo from "../image/zalo.jpg"

function SignIn() {
  return (
<>
      <div className='back_button'>
        <a href='/' >
        
        <img className='back_button_img' src={back_button} alt=''></img>
        </a>
      </div>
      <div className="pic_signup">
        <img className="pic_sign_up" src={pic_sign_up} alt=""></img>
      </div>
      <p className="sign_up_head_text">Đăng nhập với</p>
      <div className="option_signup">
        <div className='option1'>
        <img className='option_signup_pic1' src={google} alt=''></img>
        <p className='text_option'>Google</p>
        </div>
        <div className='option2'>
        <img className='option_signup_pic2' src={zalo} alt=''></img>
        <p className='text_option'>Zalo</p>
        </div>
      </div>
      <div className='or_line'>
        <div className='line1'></div>
        <p className='text_line'>hoặc</p>
        <div className='line2'></div>
      </div>
        <div className="under-body">
            <div className="under-body-contaner-right">
                <div className="head-body-contaner">
                   
                </div>  
                <div className="signin-box">
                    <input className="underbody-box-input-name-signin" type="text"  placeholder="Tên Đăng Nhập..." />
                    <input className="underbody-box-input-pw-signin" type="text"  placeholder="Mật khẩu..." />
                    <a href='/' className="forgot_pass_box">
                    <p className='forgot_pass' >Quên mật khẩu?</p>
                    </a>
                    <input className="underbody-box-input-signin" type="button" defaultValue="Đăng Nhập" />
                </div>
               <div className='bottom_signin'>
                  <p className='bottom_text'>Bạn chưa có tài khoản?</p>
                  <a href='./signup' className='forgot_pass_box'>
                    <p className='chang_to_signup'>Đăng ký ngay</p>
                  </a>
                
               </div>
                
            </div>
        </div>
   
</>
  )

}

export default SignIn
