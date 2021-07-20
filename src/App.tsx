import React from "react";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.App}>
      <div className={s.navigation_wrap}>
        <div className={s.navigation_header}>
          <a href="#" className={s.nav_link}>
            <img src="#" alt="" className={s.logo} />
          </a>
        </div>

        <nav className={s.menu}>
          <ul className={s.menu_list}>
            <li className={s.menu_item}>
              <a>About</a>
            </li>
            <li className={s.menu_item}>
              <a>My Skills</a>
            </li>
            <li className={s.menu_item}>
              <a>Work</a>
            </li>
            <li className={s.menu_item}>
              <a>Blog</a>
            </li>
            <li className={s.menu_item}>
              <a>Contact</a>
            </li>
          </ul>
        </nav>

        <div className={s.social}>
          <a href="#" className={s.social_link}>
            <img src="#" alt="" className={s.social_lnk} />{" "}
          </a>
          <a href="#" className={s.social_link}>
            <img src="#" alt="" className={s.social_tg} />{" "}
          </a>
          <a href="#" className={s.social_link}>
            <img src="#" alt="" className={s.social_gh} />{" "}
          </a>
        </div>
      </div>
      <section className={s.main}>
        <div className={s.main_inner}>
          <h1 className={s.title}>
            Hi,
            <br />
            I'm Egor
            <br />
            web developer
          </h1>
          <p className={s.main_descr}>
            Front End Developer from Saint-Petersburg
          </p>
          <a href="#" className={s.btn}>
            Contact me
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
