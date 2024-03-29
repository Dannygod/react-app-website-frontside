import React from "react";
const Nav = () => {
  return (
    <div>
      <header>
        <nav>
          <div class="logo">
            <a href="/">
              <img src={require("./image/Logo.png")} alt="Background" />
            </a>
          </div>
          <ul>
            <li>
              <a href="/">營隊介紹</a>
            </li>
            <li>
              <a href="/">報名資訊</a>
            </li>
            <li>
              <a class="more" href="/">
                更多
              </a>
            </li>
            <li>
              <a href="/">登入/註冊</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
