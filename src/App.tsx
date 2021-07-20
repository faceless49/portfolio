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
      <section className={s.work}>
        <div className={s.work_inner}>
          <div className="work_column">
            <h2 className="title">My portfolio</h2>
            <p className={s.work_descr}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              dicta culpa atque accusantium repellat id temporibus doloribus
              pariatur placeat quia fugiat, nulla, architecto hic sunt at eius?
              Incidunt, eveniet eligendi!
            </p>
          </div>
          <a href="#" className={s.btn}>
            See github!
          </a>
        </div>
        <div className="magic_wall">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </section>
      <section className={s.about}>
        <div className={s.about_inner}>
          <div className={s.about_column}>
            <h2 className="title">About me</h2>
            <p className={s.about_descr}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              recusandae, expedita alias impedit, tenetur, illum nobis
              reiciendis totam corrupti reprehenderit quisquam consectetur
              libero voluptatibus porro veritatis nulla eligendi deleniti velit.
            </p>
            <p className={s.about_descr}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              recusandae, expedita alias impedit, tenetur, illum nobis
              reiciendis totam corrupti reprehenderit quisquam consectetur
              libero voluptatibus porro veritatis nulla eligendi deleniti velit.
            </p>
            <p className={s.about_descr}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              recusandae, expedita alias impedit, tenetur, illum nobis
              reiciendis totam corrupti reprehenderit quisquam consectetur
              libero voluptatibus porro veritatis nulla eligendi deleniti velit.
            </p>
          </div>
          <div className={s.about_skills}></div>
        </div>
      </section>
    </div>
  );
}

export default App;
