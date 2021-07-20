import s from './About.module.scss'
import React from 'react';


export const About = (props: any) => {
  return (
    <section className={s.about}>
      <div className={s.about_inner}>
        <div className={s.about_column}>
          <h2 className={s.title}>About me</h2>
          <p className={s.about_descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            recusandae, expedita alias impedit, tenetur, illum nobis
            reiciendis totam corrupti reprehenderit quisquam consectetur
            libero voluptatibus porro veritatis nulla eligendi deleniti
            velit.
          </p>
          <p className={s.about_descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            recusandae, expedita alias impedit, tenetur, illum nobis
            reiciendis totam corrupti reprehenderit quisquam consectetur
            libero voluptatibus porro veritatis nulla eligendi deleniti
            velit.
          </p>
          <p className={s.about_descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            recusandae, expedita alias impedit, tenetur, illum nobis
            reiciendis totam corrupti reprehenderit quisquam consectetur
            libero voluptatibus porro veritatis nulla eligendi deleniti
            velit.
          </p>
        </div>
        <div className={s.about_skills}></div>
      </div>
    </section>
  );
};
