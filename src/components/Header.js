import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import style from "../style/header.module.css";

function Header(props) {
  const [loginBtnVisibility, setLoginBtnVisibility] = useState();
  useEffect(() => {
    setLoginBtnVisibility(props.location.pathname);
  });
  return (
    <nav class="navbar navbar-expand-sm">
      <Link class="navbar-brand" to="/">
        <img src="/images/camp-id-logo.png" alt="" />
      </Link>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav">
          <li class={`${style.nav_item} nav-item active mr-5`}>
            <a class={`${style.nav_link} nav-link`} href="#">
              Sports
            </a>
          </li>
          <li class={`${style.nav_item} nav-item`}>
            <a class={`${style.nav_link} nav-link`} href="#">
              Camp Reviews
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class={`${style.nav_item} nav-item mr-3`}>
            <a class={`${style.mainBtn} mainBtn outline`} href="#">
              Post Your Camp
            </a>
          </li>
          {loginBtnVisibility == "/login" ? (
            ""
          ) : (
            <li class={`${style.nav_item} nav-item`}>
              <Link class={`${style.mainBtn} mainBtn`} to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
export default withRouter(Header);
