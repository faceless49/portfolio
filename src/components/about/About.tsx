import s from "./About.module.scss";
import React from "react";
import { Title } from "../../ui/title/Title";
import TechStack from "../techStack/TechStack";
import { Letter } from "../../ui/letter/Letter";

export const About = () => {
  const myself = [
    "M",
    "e,",
    "\u00A0",
    "M",
    "y",
    "s",
    "e",
    "l",
    "f",
    "\u00A0",
    "a",
    "n",
    "d",
    "\u00A0",
    "I",
  ];

  return (
    <section className={s.about} id="about">
      <div className={"container"}>
        <div className={s.about_inner}>
          <div className={s.about_column}>
            <Title>
              {myself.map((item, i) => (
                <Letter key={i}>{item}</Letter>
              ))}
            </Title>
            <div className={s.about_wrap}>
              <p className={s.about_descr}>
                I'm a Front-End Developer for Saint-Petersburg, Russia.
              </p>
              <p className={s.about_descr}>
                Front-End developer with experience in creating SPA using React,
                Redux, HTML, CSS, JS. My free time is dedicated to Codewars and
                learning NodeJS. In the future I see myself as a Full Stack
                Developer. Ready to consider project work and full-time
                employment.
              </p>
            </div>
          </div>
          <div className={s.about_skills}>
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
};
