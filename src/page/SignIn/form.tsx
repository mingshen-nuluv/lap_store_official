import React from 'react';
import type { FormProps } from 'antd';
import "./signin.scss"
import { Button, Checkbox, Form, Input } from 'antd';
import { Body } from '../../Component/layout_header';
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  /* providing token in bearer */
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: values.username,
      password: values.password,
      expiresInMins: 30, // optional, defaults to 60
    })
  })
    .then(res => res.json())
    .then(console.log)
  // .then(responseData => {
  //   if (responseData) {
  //     return (

  //     )
  //   }
  // }
  // );
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const App: React.FC = () => (
  <>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>

      </Form.Item>
    </Form>

  </>
);

export default App;



