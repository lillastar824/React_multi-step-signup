import React from "react";
import style from "../style/partnerSection.module.css";

export default function PartnerSection() {
  return (
    <section class={style.partnersSection}>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 mx-auto">
            <h2 class="subHeading mb-0">PARTNERS & ALLIANCES</h2>
            <div class="mainText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas?
            </div>
            <div class="row">
              <div class="col-lg-4">
                <a class={style.partnersImg} href="#">
                  <img src="/images/camp-id-logo.png" alt="" />
                </a>
              </div>
              <div class="col-lg-4">
                <a class={style.partnersImg} href="#">
                  <img src="/images/camp-id-logo.png" alt="" />
                </a>
              </div>
              <div class="col-lg-4">
                <a class={style.partnersImg} href="#">
                  <img src="/images/camp-id-logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
