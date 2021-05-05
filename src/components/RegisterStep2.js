import React, { useState, useEffect } from "react";
import style from "../style/registerSection.module.css";
import { Form, Select } from "antd";
import ChildAthlete from "./ChildAthlete";
import ActionBtn from "./ActionBtn";

export default function RegisterStep2(props) {
  const [form] = Form.useForm();

  const onFinish = (value) => {
    console.log(value);
    props.setFormData(value);
    props.setStepVisibility(props.stepVisibility + 1);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div id={style.stepTwo} class={style.registrationForm}>
      <Form
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div class="row mt-5">
          <div class="col-lg-8 mx-auto">
            {props.athleteArray.map((item, i) => (
              <ChildAthlete
                form={form}
                name={item}
                tab={props.tab}
                index={i + 1}
                formData={props.formData}
              />
            ))}

            {props.tab == "athlete" ? (
              <a
                href="#"
                class={style.addLink}
                onClick={() =>
                  props.setAthleteArray(
                    props.tab + (props.athleteArray.length + 1)
                  )
                }
              >
                <i class="fas fa-plus"></i>
                ADD ANOTHER CHILD/ATHLETE
              </a>
            ) : (
              ""
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
