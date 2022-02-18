import { Icon } from "./Icon/Icon";
import s from "./Success.module.scss";
export const Success = () => {
  return (
    <div className={s.success_wrap}>
      <Icon />
      <div className={s.success_text_wrap}>
        <h3 className={s.success_title}>Well done.</h3>
        <p className={s.success_text}>Your message was sent successfully!</p>
      </div>
    </div>
  );
};
