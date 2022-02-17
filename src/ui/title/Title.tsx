import s from "./Title.module.scss";

type TitlePropsType = {
  children: any;
};

export const Title = (props: TitlePropsType) => (
  <h2 className={s.title}>{props.children}</h2>
);
