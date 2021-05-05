import React, { useState, useEffect } from "react";
import style from "../style/registerSection.module.css";
import { Form, Input, Button, Checkbox, InputNumber } from "antd";
import ActionBtn from "./ActionBtn";

export default function RegisterStep1(props) {
  const [form] = Form.useForm();
  const onFinish = (value) => {
    console.log(value);
    props.setFormData(value);

    props.setStepVisibility(props.stepVisibility + 1);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const inputHandler = (e) => {
    const { value, maxLength } = e.target;
    if (String(value).length >= maxLength) {
      e.preventDefault();
      return;
    }
  };
  useEffect(() => {
    if (props.formData[0]) {
      const data = props.formData[0];
      form.setFieldsValue({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        zipcode: data.zipcode,
      });
    }
  });
  return (
    <>
      <div id={style.stepOne} class={style.registrationForm}>
        <div class={`nav ${style.nav}`} id="myTab" role="tablist">
          <a
            onClick={() => props.setTab("athlete")}
            class={`${style.subBtn} subBtn ${
              props.tab == "athlete" ? style.active : ""
            }`}
            id="tab-1"
            data-toggle="tab"
            href="#tab1"
            role="tab"
            aria-controls="tab1"
            aria-selected="true"
          >
            Athlete
          </a>
          <a
            onClick={() => props.setTab("parent")}
            class={`${style.subBtn} subBtn ${
              props.tab == "parent" ? style.active : ""
            } mr-0`}
            id="tab-2"
            data-toggle="tab"
            href="#tab2"
            role="tab"
            aria-controls="tab2"
            aria-selected="false"
          >
            Parent
          </a>
        </div>
        <Form
          form={form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="tab1"
              role="tabpanel"
              aria-labelledby="tab-1"
            >
              <div class={style.registerBody}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "",
                    },
                  ]}
                >
                  <Input class={`${style.loginInput} loginInput`} />
                </Form.Item>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "",
                    },
                  ]}
                >
                  <Input class={`${style.loginInput} loginInput`} />
                </Form.Item>
                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "",
                    },
                  ]}
                >
                  <Input class={`${style.loginInput} loginInput`} />
                </Form.Item>
                <Form.Item
                  label="Zip Code"
                  name="zipcode"
                  rules={[
                    {
                      required: true,
                      message: "",
                    },
                  ]}
                >
                  <Input
                    style={{ width: "50%" }}
                    class={`${style.loginInput} ${style.oddInput} loginInput`}
                    maxLength={5}
                    minLength={5}
                  />
                </Form.Item>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="tab2"
              role="tabpanel"
              aria-labelledby="tab-2"
            >
              <div class={style.registerBody}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "",
                    },
                  ]}
                >
                  <Input class={`${style.loginInput} loginInput`} />
                </Form.Item>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "",
                    },
                  ]}
                >
                  <Input class={`${style.loginInput} loginInput`} />
                </Form.Item>
                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "",
                    },
                  ]}
                >
                  <Input class={`${style.loginInput} loginInput`} />
                </Form.Item>
                <Form.Item
                  label="Zip Code"
                  name="zipcode"
                  rules={[
                    {
                      required: true,
                      message: "",
                    },
                  ]}
                >
                  <InputNumber
                    class={`${style.loginInput} ${style.oddInput} loginInput`}
                    maxlength="5"
                    onKeyPress={inputHandler}
                  />
                </Form.Item>
              </div>
            </div>
          </div>
          <ActionBtn
            setStepVisibility={props.setStepVisibility}
            stepVisibility={props.stepVisibility}
            setfilter={props.setfilter}
          />
        </Form>
      </div>
    </>
  );
}
