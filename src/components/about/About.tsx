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
              I have serious passion to studying programming.
              Let's make something special.
            </p>
            <p className={s.about_descr}>
              I create successful responsive websites that are fast, easy to use, and built with best practices. The
              main
              area of my expertise is front-end development, HTML, CSS, ReactJS, building small todolist and medium
              social
              network app, custom tasks features and coding interactive landings.
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
