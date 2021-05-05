import React from "react";
import style from "../style/sportSection.module.css";

export default function SportSection() {
  const cards = [];
  for (let i = 0; i < 12; i++) {
    cards.push(
      <div class="col-lg-3">
        <a class={style.sportsCard} href="#">
          <img src="/images/sports-img.png" alt="" />
          <div class={`${style.darkOverlay} ${i > 4 ? style.soonOverlay : ""}`}>
            <div>
              {i > 4 ? <div class={style.soonText}>Coming Soon</div> : ""}
              <div class={style.sportsCardHeading}>Men's Basketball</div>
            </div>
          </div>
        </a>
      </div>
    );
  }
  return (
    <section class={style.sportsSection}>
      <div class="container">
        <div class="row">{cards}</div>
      </div>
    </section>
  );
}
