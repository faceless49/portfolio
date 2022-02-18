import s from "./Project.module.scss";
import { CSSProperties } from "react";

export type ProjectPropsType = {
  title: string;
  description: string;
  style: CSSProperties;
  href: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <div className={s.magic_wall_item}>
      <div className={s.image} style={props.style}>
        <a
          className={s.viewBtn}
          href={props.href}
          target={"_blank"}
          rel="noreferrer"
        >
          View
        </a>
      </div>
      <div className={s.subtitle_wrapper}>
        <h3 className={s.subtitle}>{props.title}</h3>
        <span className={s.description}>{props.description}</span>
      </div>
    </div>
  );
};
