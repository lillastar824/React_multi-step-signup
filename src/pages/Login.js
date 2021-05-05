import React from "react";
import { Link } from "react-router-dom";
import style from "../style/login.module.css";
import heroSectionStyle from "../style/heroSection.module.css";

export default function Login() {
  return (
    <>
      <section
        class={`${heroSectionStyle.heroSection} ${style.loginSection}`}
        style={{ backgroundImage: "url(/images/hero.png)" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-5 mx-auto">
              <div class={style.loginForm}>
                <h2 class={`${style.subHeading} subHeading`}>
                  Login to your CampID Account
                </h2>
                <form class={style.logFrom} action="">
                  <label for="" class={style.loginLabel}>
                    Email Address
                  </label>
                  <input type="email" name="" id="" class={style.loginInput} />
                  <label for="" class={`${style.loginLabel} mt-4`}>
                    Password
                  </label>
                  <input
                    type="password"
                    name=""
                    id=""
                    class={style.loginInput}
                  />
                  <a class={style.resetLink} href="#">
                    Reset Password
                  </a>
                  <button class={`${style.mainBtn} mainBtn`}>Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class={style.midSection}>
        <div class="container">
          <div class="col-lg-4 mx-auto">
            <Link to="/register" class="mainText d-inline-block">
              Dont't have an account?
            </Link>
            <a href="#" class={`mainBtn ${style.mainBtn} `}>
              Parent/Athlete Signup
            </a>
            <a href="#" class={`mainBtn ${style.mainBtn} outline`}>
              Capm Director Signup
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
