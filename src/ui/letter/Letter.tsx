import s from "../../components/main/Main.module.scss";
import React from "react";

export const Letter = (props: any) => (
  <span className={s.rubber}>{props.children}</span>
);
