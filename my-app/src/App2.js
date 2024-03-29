import React from "react";
import "./style/style.css";
import "./style/app.css";
import photoImg from "./image/Photos.png";
const App2 = () => {
  return (
    <div>
      <main>
        <div class="card">
          <section class="left">
            <div class="img_container">
              <img
                src={photoImg}
                title="歷屆資工營照片"
                alt="Photo Wall"
              />
            </div>
          </section>
          <section class="right">
            <div class="words">
              <h1>
                <span class="C">C</span>hallenger
              </h1>
              <h1>
                <span class="S">S</span>urviving
              </h1>
              <h1>
                <span class="I">I</span>slands:
              </h1>
              <h1>
                <span class="E">E</span>級玩家
              </h1>

              <p>2023 師大資工營 NTNU CSIE CAMP</p>
            </div>
            <button class="register">立即報名</button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App2;
