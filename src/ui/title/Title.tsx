import s from "./Title.module.scss";

type TitlePropsType = {
  value: string;
};

export const Title = (props: TitlePropsType) => {
  return <h2 className={s.title}>{props.value}</h2>;
};
