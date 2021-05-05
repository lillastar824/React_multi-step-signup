import React, { useState } from "react";
import style from "../style/registerSection.module.css";
import { Form, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import ActionBtn from "./ActionBtn";
import { Modal, message } from "antd";

export default function RegisterStep4(props) {
  const [check, setCheck] = useState("");
  const history = useHistory();

  const onFinish = (value) => {
    console.log(value);
    props.setFormData(value);
    message.success("successfully Submitted");
    setTimeout(() => {
      history.push("/");
    }, 2000);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setCheck("required");
  };
  return (
    <div id={style.stepFour} class={style.registrationForm}>
      <Form
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div class="row mt-4">
          <div class="col-lg-8 mx-auto">
            <div class="mainText">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              reiciendis quam fuga ex itaque aliquid, ea aperiam, velit aut
              quis, nobis ipsam eaque adipisci omnis.
            </div>

            <input type="text" name="" id="" class="loginInput" />
            <div class={style.termsService}>
              <div class={style.termHeading}>Terms of Service</div>
              <div class={style.termsText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                veniam fugit, odio nisi debitis et ipsum tempore nemo molestias
                asperiores.
              </div>
              <div class={style.termsText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                veniam fugit, odio nisi debitis et ipsum tempore nemo molestias
                asperiores.
              </div>
              <div class={style.termsText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                veniam fugit, odio nisi debitis et ipsum tempore nemo molestias
                asperiores.
              </div>
              <div class={style.termsText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                veniam fugit, odio nisi debitis et ipsum tempore nemo molestias
                asperiores.
              </div>
              <div class={style.termsText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                veniam fugit, odio nisi debitis et ipsum tempore nemo molestias
                asperiores.
              </div>
              <div class={style.termsText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                veniam fugit, odio nisi debitis et ipsum tempore nemo molestias
                asperiores.
              </div>
              <div class={style.termsText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                veniam fugit, odio nisi debitis et ipsum tempore nemo molestias
                asperiores.
              </div>
            </div>
            <div class={style.checkBoxArea}>
              <Form.Item
                name="agree"
                valuePropName="checked"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <Checkbox
                  style={{ color: check == "required" ? "red" : "" }}
                  onChange={() => setCheck("")}
                >
                  i agree with the terms of service
                </Checkbox>
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
  );
}
