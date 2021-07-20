import s from "./Work.module.scss";
import { Btn } from "./../../ui/btn/Btn";
import { Title } from "./../../ui/title/Title";
export const Work = () => {
  return (
    <section className={s.work}>
      <div className={s.work_inner}>
        <div className={s.work_column}>
          <Title value={"My portfolio"} />
          <p className={s.work_descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            dicta culpa atque accusantium repellat id temporibus doloribus
            pariatur placeat quia fugiat, nulla, architecto hic sunt at eius?
            Incidunt, eveniet eligendi!
          </p>
        </div>
        <Btn value={"See github!"} />
      </div>
      <div className={s.magic_wall}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>
    </section>
  );
};
