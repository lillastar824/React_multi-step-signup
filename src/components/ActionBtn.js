import React from "react";
import style from "../style/registerSection.module.css";
import { useHistory } from "react-router-dom";
import { Modal, message } from "antd";

export default function ActionBtn(props) {
  const history = useHistory();

  return (
    <div class="row mt-5">
      <div class="col-lg-8 mx-auto">
        <div class="row">
          <div class="col-lg-6">
            <a
              onClick={() => {
                if (props.stepVisibility !== 1) {
                  props.setStepVisibility(props.stepVisibility - 1);
                  props.setfilter();
                } else {
                  props.setStepVisibility(1);
                }
              }}
              class={`${style.mainBtn} mainBtn outline`}
            >
              Cancel
            </a>
          </div>
          <div class="col-lg-6 mt-4 mt-lg-0">
            <button
              htmlType="submit"
              class={`${style.mainBtn} mainBtn nextBtn`}
            >
              {props.stepVisibility == 4 ? "View Camp Dashboard" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
