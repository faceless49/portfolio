import s from "./Burger.module.scss";

export const Burger = (props: any) => {
  return (
    <div className={`${s.menu__icon} ${s.icon_menu}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
