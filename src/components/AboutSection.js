import React from "react";
import style from "../style/aboutSection.module.css";

export default function AboutSection() {
  return (
    <section class={style.aboutSection}>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <h2 class="subHeading">Why CampID?</h2>
            <div class="mainText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur dolores aliquam illo. Error, dolorem voluptas?
            </div>
          </div>
          <div class="col-lg-7 mx-auto">
            <div class="mainText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              qui commodi voluptatum fuga exercitationem aut tempore, sunt natus
              possimus adipisci ab ea unde, distinctio corporis?
            </div>
          </div>
          <div class="col-lg-8 mx-auto">
            <div class="mainText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              commodi optio quas excepturi beatae voluptates ad officia modi
              consequuntur reprehenderit recusandae, nesciunt, blanditiis
              ducimus aspernatur necessitatibus numquam exercitationem dolor
              odit natus.
            </div>
          </div>
          <div class="col-lg-5 mx-auto">
            <a href="#" class={`mainBtn ${style.outline}`}>
              <i class="fas fa-play-circle mr-2"></i> Watch Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
