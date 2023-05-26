import React, { useState } from "react";
import { Form, TimePicker, Select, Button} from "antd";
import moment from "moment";

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

const format = "HH:mm";
const { Option } = Select;

const HomePage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const startChange = (time, timeString) => {
    console.log(time, timeString);
  };

  const endChange = (time, timeString) => {
    console.log(time, timeString);
  };

  function intervalChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <div className="hello"></div>
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
          label="Lecture Start Time"
          name="start"
          rules={[
            {
              required: false,
              message: "Please enter the starting time of class!",
            },
          ]}
        >
          <TimePicker
            defaultValue={moment()}
            format={format}
            onChange={startChange}
            disabled
          />
        </Form.Item>

        <Form.Item
          label="Lecture End Time"
          name="end"
          rules={[
            {
              required: true,
              message: "Please enter the ending time of class!",
            },
          ]}
        >
          <TimePicker
            defaultOpenValue={moment("07:00", format)}
            format={format}
            onChange={endChange}
          />
        </Form.Item>

        <Form.Item
          label="No. of Intervals"
          name="interval"
          rules={[
            {
              required: true,
              message: "Please select number of intervals!",
            },
          ]}
        >
          <Select style={{ width: 140 }} onChange={intervalChange}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
          </Select>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Start Capturing
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default HomePage;
