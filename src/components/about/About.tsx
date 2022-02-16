import s from './About.module.scss'
import React from 'react';
import {Title} from '../../ui/title/Title';
import TechStack from '../techStack/TechStack';


export const About = (props: any) => {
  return (
    <section className={s.about}>
      <div className={s.about_inner}>
        <div className={s.about_column}>
          <Title value={'Me, Myself and I'}/>
          <div className={s.descr_wrap}>
            <p className={s.about_descr}>
              I'm a Front-End Developer for Saint-Petersburg, Russia.
            </p>
            <p className={s.about_descr}>
              Front-End developer with experience in creating SPA using React, Redux, HTML, CSS, JS.
              My free time is dedicated to Codewars and learning NodeJS. In the future I see myself
              as a Full Stack Developer.
              Ready to consider project work and full-time employment.
            </p>
          </div>
        </div>
        <div className={s.about_skills}>
          <TechStack/>
        </div>
      </div>
    </section>
  );
};
