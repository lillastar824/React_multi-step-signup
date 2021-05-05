import React from "react";
import style from "../style/footer.module.css";

export default function Footer() {
  return (
    <>
      <section class={style.footerSection}>
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class={style.footerHeading}>Recent News</div>
              <div class={`${style.subText} ${style.colord}`}>
                Lorem ipsum dolor sit amet.
              </div>
              <div class={`${style.subText} ${style.colord}`}>
                Lorem ipsum dolor sit amet consectetur lorem
              </div>
              <div class={`${style.subText} ${style.colord}`}>
                Lorem ipsum dolor sit amet consectetur
              </div>
            </div>
            <div class="col-lg-3">
              <div class={style.footerHeading}>Resources</div>
              <div class={`${style.subText} ${style.colord}`}>
                Lorem ipsum dolor sit amet.
              </div>
              <div class={`${style.subText} ${style.colord}`}>
                Lorem ipsum dolor sit amet consectetur
              </div>
              <div class={`${style.subText} ${style.colord}`}>
                Lorem ipsum dolor sit amet consectetur
              </div>
              <div class={`${style.subText} ${style.colord}`}>
                Lorem ipsum dolor sit amet consectetur
              </div>
            </div>
            <div class="col-lg-3">
              <div class={style.footerHeading}>CapmID</div>
              <div class={style.footerLinks}>
                <a href="#" class={`${style.subText} ${style.colord}`}>
                  About Us
                </a>
                <a href="#" class={`${style.subText} ${style.colord}`}>
                  Privacy Policy
                </a>
                <a href="#" class={`${style.subText} ${style.colord}`}>
                  Terms of Use
                </a>
                <a href="#" class={`${style.subText} ${style.colord}`}>
                  Contact
                </a>
              </div>
            </div>
            <div class="col-lg-3">
              <div class={style.footerHeading}>Contact</div>
              <div class={style.subText}>Lorem ipsum dolor sit amet.</div>

              <div class={style.add}>
                <i class="fas fa-phone-alt"></i>
                <span class={`${style.subText} ${style.colord}`}>
                  111.222.3333
                </span>
              </div>
              <div class={style.add}>
                <i class="far fa-envelope"></i>
                <span class={`${style.subText} ${style.colord}`}>
                  abc@sports.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class={style.pageFooter}>
        <div class="container">
          <span class={style.copyright}>Copyright 2019 spordtID.INC</span>
          <a class={style.socialIcons} href="#">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a class={style.socialIcons} href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a class={style.socialIcons} href="#">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a class={style.socialIcons} href="#">
            <i class="fab fa-youtube-square"></i>
          </a>
        </div>
      </footer>
    </>
  );
}
