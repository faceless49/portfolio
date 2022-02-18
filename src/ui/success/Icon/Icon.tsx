import s from "./Icon.module.scss";
export const Icon = () => {
  return (
    <div className={s.dummy_positioning}>
      <div className={s.success_icon}>
        <div className={s.success_icon__tip}></div>
        <div className={s.success_icon__long}></div>
      </div>
    </div>
  );
};
