import React from "react";
import style from "../style/registerSection.module.css";
import { Form, Select, Input } from "antd";

export default function Sports(props) {
  const { Option } = Select;
  return (
    <div class="row">
      <div class="col-lg-6">
        <Form.Item
          label="Sports #1"
          name={`${props.name}_Sports1`}
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <Select showSearch placeholder="- Select One -">
            <Option value="Basketball">Basketball</Option>
            <Option value="Football">Football</Option>
            <Option value="Hockey">Hockey</Option>
          </Select>
        </Form.Item>
      </div>
      <div class="col-lg-6 mt-4 mt-lg-0">
        <Form.Item
          label="Skill Level"
          name={`${props.name}_sport1_SkillLevel`}
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <Select showSearch placeholder="- Select One -">
            <Option value="level1">level1</Option>
            <Option value="level2">level2</Option>
            <Option value="level3">level3</Option>
            <Option value="level4">level4</Option>
            <Option value="level5">level5</Option>
          </Select>
        </Form.Item>
      </div>
      <div class="col-lg-6 mt-4">
        <Form.Item
          label="Sports #2"
          name={`${props.name}_Sports2`}
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <Select showSearch placeholder="- Select One -">
            <Option value="Basketball">Basketball</Option>
            <Option value="Football">Football</Option>
            <Option value="Hockey">Hockey</Option>
          </Select>
        </Form.Item>
      </div>
      <div class="col-lg-6 mt-4">
        <Form.Item
          label="Skill Level"
          name={`${props.name}_sport2_SkillLevel`}
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <Select showSearch placeholder="- Select One -">
            <Option value="level1">level1</Option>
            <Option value="level2">level2</Option>
            <Option value="level3">level3</Option>
            <Option value="level4">level4</Option>
            <Option value="level5">level5</Option>
          </Select>
        </Form.Item>
      </div>
      <div class="col-lg-6 mt-4">
        <Form.Item
          label="Sports #3"
          name={`${props.name}_Sports3`}
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <Select showSearch placeholder="- Select One -">
            <Option value="Basketball">Basketball</Option>
            <Option value="Football">Football</Option>
            <Option value="Hockey">Hockey</Option>
          </Select>
        </Form.Item>
      </div>
      <div class="col-lg-6 mt-4">
        <Form.Item
          label="Skill Level"
          name={`${props.name}_sport3_SkillLevel`}
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <Select showSearch placeholder="- Select One -">
            <Option value="level1">level1</Option>
            <Option value="level2">level2</Option>
            <Option value="level3">level3</Option>
            <Option value="level4">level4</Option>
            <Option value="level5">level5</Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  );
}
