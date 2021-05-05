import React, { useState } from "react";
import RegisterStep1 from "../components/RegisterStep1";
import RegisterStep2 from "../components/RegisterStep2";
import RegisterStep3 from "../components/RegisterStep3";
import RegisterStep4 from "../components/RegisterStep4";
import style from "../style/registerSection.module.css";
import "antd/dist/antd.css";

export default function Register() {
  const [stepVisibility, setStepVisibility] = useState(1);
  const [tab, setTab] = useState("athlete");
  const [formData, setFormData] = useState([]);
  const [athleteArray, setAthleteArray] = useState();
  const filterData = () => {
    setFormData(formData.filter((item, i) => i !== stepVisibility - 1));
  };
  return (
    <section class={style.registrationSection}>
      <div class="container">
        <div class="row">
          <div class="col-lg-9 mx-auto">
            <div>
              <h2
                class="subHeading"
                dangerouslySetInnerHTML={{
                  __html: `${
                    stepVisibility == 1
                      ? "Ready for personalized camps and features? <br /> Signup and get full access to registrations now!"
                      : stepVisibility == 2
                      ? "Enter the name(s) of your athletes, gender, and date of <br /> birth for customized camps."
                      : stepVisibility == 3
                      ? "What sports are your athletes interested in or do they play? You can personalize up to 3 sports."
                      : stepVisibility == 4
                      ? "Let's get your athletes some camps to signup for. <br /> Review & Accept terms then your custom dashboard."
                      : ""
                  }`,
                }}
              >
                {}
              </h2>
              <div class={`${style.progress} progress`}>
                <div
                  class={`${style.progress_bar} progress-bar`}
                  role="progressbar"
                  style={{
                    width:
                      stepVisibility == 1
                        ? "25%"
                        : stepVisibility == 2
                        ? "50%"
                        : stepVisibility == 3
                        ? "75%"
                        : stepVisibility == 4
                        ? "100%"
                        : "0%",
                  }}
                  aria-valuenow={
                    stepVisibility == 1
                      ? "25"
                      : stepVisibility == 2
                      ? "50"
                      : stepVisibility == 3
                      ? "75"
                      : stepVisibility == 4
                      ? "100"
                      : "0"
                  }
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {stepVisibility == 1
                    ? "25%"
                    : stepVisibility == 2
                    ? "50%"
                    : stepVisibility == 3
                    ? "75%"
                    : stepVisibility == 4
                    ? "100%"
                    : "0%"}
                </div>
              </div>
              {stepVisibility == 1 ? (
                <RegisterStep1
                  stepVisibility={stepVisibility}
                  setStepVisibility={(item) => setStepVisibility(item)}
                  tab={tab}
                  setTab={(item) => setTab(item)}
                  setFormData={(item) => {
                    setFormData(stepVisibility == 1 ? [item] : "");
                    setAthleteArray(["athlete1"]);
                  }}
                  setfilter={() => filterData()}
                  formData={formData}
                />
              ) : stepVisibility == 2 ? (
                <RegisterStep2
                  stepVisibility={stepVisibility}
                  tab={tab}
                  setStepVisibility={(item) => setStepVisibility(item)}
                  setFormData={(item) => {
                    const newArray = formData.filter(
                      (item, i) => i !== stepVisibility - 1
                    );
                    setFormData([...newArray, item]);
                  }}
                  setfilter={() => filterData()}
                  formData={formData}
                  setAthleteArray={(item) =>
                    setAthleteArray([...athleteArray, item])
                  }
                  athleteArray={athleteArray}
                />
              ) : stepVisibility == 3 ? (
                <RegisterStep3
                  stepVisibility={stepVisibility}
                  tab={tab}
                  setStepVisibility={(item) => setStepVisibility(item)}
                  data={formData}
                  setFormData={(item) => {
                    const newArray = formData.filter(
                      (item, i) => i !== stepVisibility - 1
                    );
                    setFormData([...newArray, item]);
                  }}
                  setfilter={() => filterData()}
                />
              ) : stepVisibility == 4 ? (
                <RegisterStep4
                  stepVisibility={stepVisibility}
                  setStepVisibility={(item) => setStepVisibility(item)}
                  setFormData={(item) => setFormData([...formData, item])}
                  setfilter={() => filterData()}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
