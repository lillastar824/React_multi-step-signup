import React, { useEffect } from "react";
import style from "../style/registerSection.module.css";
import Sports from "./Sports";
import { Form, Select } from "antd";
import ActionBtn from "./ActionBtn";

export default function RegisterStep3(props) {
  const [form] = Form.useForm();
  const data = props.data[1];
  const keys = Object.keys(data);
  const selectedFirstName = keys.filter((item) => item.includes("firstName"));
  const selectedLastName = keys.filter((item) => item.includes("lastName"));
  const onFinish = (value) => {
    console.log(value);
    props.setFormData(value);
    props.setStepVisibility(props.stepVisibility + 1);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  if (props.data[2]) {
    const data = props.data[2];
    form.setFieldsValue(data);
  }

  return (
    <div id={style.stepThree} class={style.registrationForm}>
      <Form
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div class="row mt-4">
          <div class="col-lg-8 mx-auto">
            {props.tab == "athlete" ? (
              selectedFirstName.map((item, i) => (
                <>
                  <div class={`mainText text-left ${style.oddText}`}>
                    {data[item]} {data[selectedLastName[i]]}
                  </div>
                  <Sports name={data[item]} />
                </>
              ))
            ) : (
              <Sports name={data[0]} />
            )}
          </div>
        </div>
        <ActionBtn
          setStepVisibility={props.setStepVisibility}
          stepVisibility={props.stepVisibility}
          setfilter={props.setfilter}
        />
      </Form>
    </div>
  );
}
