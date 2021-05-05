import React from "react";
import style from "../style/detailSection.module.css";

export default function DetailSection() {
  return (
    <section class={style.detailsSection}>
      <div class="container">
        <div class="row">
          <div class="col-lg-9 mx-auto">
            <div class="row">
              <div class="col-lg-6 pr-3 pr-lg-5">
                <i class={`far fa-user-circle ${style.userIcon}`}></i>
                <div class={style.detailHeading}>CampID For Athletes</div>
                <div class={`${style.details} mt-4`}>
                  <i class={`far fa-clipboard ${style.detailIcon}`}></i>
                  <div class={style.detailsText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa!
                  </div>
                </div>
                <div class={style.details}>
                  <i class={`far fa-clipboard ${style.detailIcon}`}></i>
                  <div class={style.detailsText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa!
                  </div>
                </div>
                <div class={style.details}>
                  <i class={`far fa-clipboard ${style.detailIcon}`}></i>
                  <div class={style.detailsText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa!
                  </div>
                </div>
                <div class={style.details}>
                  <i class={`far fa-clipboard ${style.detailIcon}`}></i>
                  <div class={style.detailsText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa!
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mt-4 mt-lg-0 pl-3 pl-lg-5">
                <i class={`far fa-user-circle ${style.userIcon}`}></i>
                <div class={style.detailHeading}>CampID For Athletes</div>
                <div class={`${style.details} mt-4`}>
                  <i class={`far fa-clipboard ${style.detailIcon}`}></i>
                  <div class={style.detailsText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa!
                  </div>
                </div>
                <div class={style.details}>
                  <i class={`far fa-clipboard ${style.detailIcon}`}></i>
                  <div class={style.detailsText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa!
                  </div>
                </div>
                <div class={style.details}>
                  <i class={`far fa-clipboard ${style.detailIcon}`}></i>
                  <div class={style.detailsText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa!
                  </div>
                </div>
                <div class={style.details}>
                  <i class={`far fa-clipboard ${style.detailIcon}`}></i>
                  <div class={style.detailsText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
