import React, { useState, useEffect } from "react";
import style from "../style/registerSection.module.css";
import { Form, Select, Input, InputNumber } from "antd";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

export default function ChildAthlete(props) {
  const [calenderVisibility, setCalenderVisibility] = useState(false);
  const [value, setValue] = useState(new Date());
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();

  const [form] = Form.useForm();
  const onChange = (value, e) => {
    setYear(moment(value).format("YYYY"));
    setMonth(moment(value).format("MM"));
    setDay(moment(value).format("DD"));
    setCalenderVisibility(false);
  };
  const { Option } = Select;
  useEffect(() => {
    props.form.setFieldsValue({
      [`${props.tab}_${props.index}_year`]: year,
      [`${props.tab}_${props.index}_month`]: month,
      [`${props.tab}_${props.index}_day`]: day,
    });
    if (props.formData[1]) {
      const data = props.formData[1];
      props.form.setFieldsValue(data);
    }
  });
  return (
    <>
      {props.tab == "athlete" ? (
        <div class={`${style.mainText} mainText text-left`}>
          What's your child's/athlete's name?
        </div>
      ) : (
        ""
      )}

      <div class="row">
        {props.tab == "athlete" ? (
          <>
            {" "}
            <div class="col-lg-6">
              <Form.Item
                label="First Name"
                name={`${props.tab}_${props.index}_firstName`}
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <Input class={`${style.loginInput} loginInput`} />
              </Form.Item>
            </div>
            <div class="col-lg-6">
              <Form.Item
                label="Last Name"
                name={`${props.tab}_${props.index}_lastName`}
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <Input class={`${style.loginInput} loginInput`} />
              </Form.Item>
            </div>
          </>
        ) : (
          ""
        )}

        <div class="col-lg-6 mt-4">
          <div class={`${style.mainText} mainText text-left`}>Gender?</div>
          <Form.Item
            label="Sex"
            name={`${props.tab}_${props.index}_sex`}
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Select showSearch placeholder="Gender">
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          </Form.Item>
        </div>
        <div class="col-lg-6 mt-4">
          <div class={`${style.mainText} mainText text-left`}>
            What is your date of birth
          </div>
          <div class={style.multiInputs}>
            <Form.Item
              label="Month"
              name={`${props.tab}_${props.index}_month`}
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={1}
                max={12}
                class={`${style.loginInput} loginInput`}
              />
            </Form.Item>
            <Form.Item
              label="Day"
              name={`${props.tab}_${props.index}_day`}
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={1}
                max={31}
                class={`${style.loginInput} loginInput`}
              />
            </Form.Item>
            <Form.Item
              label="Year"
              name={`${props.tab}_${props.index}_year`}
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={1}
                max={9999}
                class={`${style.loginInput} loginInput`}
              />
            </Form.Item>
            <i
              class="fas fa-calendar-alt"
              onClick={() => setCalenderVisibility(!calenderVisibility)}
            ></i>
          </div>
          {calenderVisibility ? (
            <Calendar onChange={onChange} value={value} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
