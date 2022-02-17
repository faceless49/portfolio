import React from "react";
import s from "../main/Main.module.scss";
import { Btn } from "../../ui/btn/Btn";
// @ts-ignore
import DancingLines from "react-dancing-lines";
import { Letter } from "../../ui/letter/Letter";

// const Letter = (props: any) => {
//   // const [hovered, setHovered] = React.useState(false);
//   // const toggleHover = () => setHovered(!hovered);
//   return (
//     <span
//       className={s.rubber}
//       // onMouseEnter={toggleHover}
//       // onMouseLeave={toggleHover}
//     >
//       {props.children}
//     </span>
//   );
// };

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
          <Btn value={"Contact me"} />
        </div>
      </div>
      <DancingLines></DancingLines>
    </section>
  );
};
