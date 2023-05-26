import { Form, Input, Button, Checkbox } from "antd";
import Password from "antd/lib/input/Password";
import React, { useState } from "react";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 5,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 5,
  },
};

const NormalLoginForm = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const passwordChange = (e) => {
    setPass(e.target.value);
  };

  const pageChange = () => {
    if (name !== "" && Password !== "") {
      window.location.href = "http://localhost:3000/home";
    }
  };

  return (
    <>
      {/* For margin top space */}
      <div className="hello"></div>

      {/* Login Form */}
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input value={name} onChange={nameChange} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password value={pass} onChange={passwordChange} />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={pageChange}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NormalLoginForm;
