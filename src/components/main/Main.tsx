import React from "react";
import s from "../main/Main.module.scss";
import { Letter } from "../../ui/letter/Letter";
import { Link } from "react-scroll";

export const Main = () => {
  const hi = ["H", "i", ","];
  const name = ["i", "’", "m", "\u00A0", "E", "g", "o", "r", ","];
  const webdev = [
    "w",
    "e",
    "b",
    "\u00A0",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  return (
    <section className={s.main} id="main">
      <span className={s.tag}>/html</span>
      <div className={s.main_inner}>
        <div className={"container"}>
          <h1 className={s.title}>
            {hi.map((item, i) => (
              <Letter key={i}>{item}</Letter>
            ))}
            <br />
            {name.map((item, i) => (
              <Letter key={i}>{item}</Letter>
            ))}
            <br />
            {webdev.map((item, i) => (
              <Letter key={i}>{item}</Letter>
            ))}
          </h1>

          <p className={s.main_descr}>
            Front End Developer from Saint-Petersburg
          </p>
          <Link
            className={s.main_link}
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};
