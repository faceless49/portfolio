import React from "react";
import s from "./App.module.scss";
import { Navigation } from "./components/navigation/Navigation";
import { Main } from "./components/main/Main";

function App() {
  return (
    <div className={s.App}>
      <Navigation />
      <Main />
      <section className={s.work}>
        <div className={s.work_inner}>
          <div className={s.work_column}>
            <h2 className={s.title}>My portfolio</h2>
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
        <div className={s.magic_wall}>
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
            <h2 className={s.title}>About me</h2>
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
      <section className={s.contact}>
        <div className={s.contact_inner}>
          <h2 className={s.title}>Contact me</h2>
          <p className={s.contact_descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            earum tempora sit ex? Ea cupiditate quos voluptatem, nam rem rerum?
            Consequuntur, repudiandae neque eaque autem recusandae explicabo
            temporibus voluptatum aut?
          </p>
          <div className={s.contact_form}>
            <form action="">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </form>
          </div>
        </div>
        <div className={s.contact_map}></div>
      </section>
    </div>
  );
}

export default App;
