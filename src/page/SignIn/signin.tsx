import React, { useState } from 'react';
import "../SignIn/signin.scss";
import { Divider } from 'antd';
import Form from "./form"

// import Formmini from "./form_mini"


const SignIn = (props: any) => {
  // const {handleLogin} = props;

  const [auth, setAuth] = useState({ user: "", token: "" })
  const handleLogin = (username: string, password: string) => {
    // goi sang later
    // tra ve ket qua co username vs tooken - xet ket qua vao auth
  }

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
      <p className="sign_up_head_text">Đăng nhập với</p>
      <section className="option_signup">
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
      </section>

      <section className="or_line">

        <Divider plain>
          <p className="text_line">Hoặc</p>
        </Divider>
      </section>
      <section className="under-body">
        <Form />
      </section>

    </>
  );
};

export default SignIn;



