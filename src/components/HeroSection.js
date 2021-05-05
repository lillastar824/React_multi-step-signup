import React from "react";
import style from "../style/heroSection.module.css";

export default function HeroSection() {
  return (
    <section
      class={style.heroSection}
      style={{ backgroundImage: "url(/images/hero.png)" }}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h1 class="mainHeading">
              Looking for a great sports camp to attend? <br />
              Select sports & region and search our database now!
            </h1>
            <div class="row mt-5 px-3 px-lg-5">
              <div class="col-lg-6">
                <select
                  class="commonSelectOption"
                  name=""
                  id=""
                  style={{
                    backgroundImage: "url(/images/dropdown-icon.png)",
                  }}
                >
                  <option value="">Select Sport(s)</option>
                  <option value="">Cricket</option>
                  <option value="">Football</option>
                  <option value="">Hockey</option>
                </select>
              </div>
              <div class="col-lg-3">
                <select
                  class={`commonSelectOption ${style.oddSelect}`}
                  name=""
                  id=""
                  style={{
                    backgroundImage: "url(/images/dropdown-icon.png)",
                  }}
                >
                  <option value="">Select State</option>
                  <option value="">Cricket</option>
                  <option value="">Football</option>
                  <option value="">Hockey</option>
                </select>
              </div>
              <div class="col-lg-3">
                <button class="mainBtn w-100" href="#">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
