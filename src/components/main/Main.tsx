import s from "./Main.module.scss";

export const Main = () => {
  return (
    <section className={s.main}>
      <div className={s.main_inner}>
        <h1 className={s.title}>
          Hi,
          <br />
          I'm Egor
          <br />
          web developer
        </h1>
        <p className={s.main_descr}>
          Front End Developer from Saint-Petersburg
        </p>
        <a href="#" className={s.btn}>
          Contact me
        </a>
      </div>
    </section>
  );
};
