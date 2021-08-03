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
            A small gallery of recent projects.
            Visit <a className={s.link} href={'https://github.com/faceless49'}>my work</a> page.
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
