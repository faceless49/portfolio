import React from "react";
import s from "../main/Main.module.scss";
import { Btn } from "../../ui/btn/Btn";
// @ts-ignore
import DancingLines from 'react-dancing-lines'
export const Main = () => {
  return (
    <section className={s.main}>
      <span className={s.tag}>/html</span>
      <div className={s.main_inner}>
        <h1 className={s.title}>
          Hi,
          <br />
          I'm Egor,
          <br />
          web developer
        </h1>
        <p className={s.main_descr}>
          Front End Developer from Saint-Petersburg
        </p>
        <Btn value={"Contact me"} />
      </div>
      <DancingLines></DancingLines>
    </section>
  );
};

