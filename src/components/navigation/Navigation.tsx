import s from "./Navigation.module.scss";

export const Navigation = (props) => {
  return (
    <div className={s.navigation_wrap}>
      <div className={s.navigation_header}>
        <a href="#" className={s.nav_link}>
          <img src="#" alt="" className={s.logo} />
        </a>
      </div>

      <nav className={s.menu}>
        <ul className={s.menu_list}>
          <li className={s.menu_item}>
            <a>About</a>
          </li>
          <li className={s.menu_item}>
            <a>My Skills</a>
          </li>
          <li className={s.menu_item}>
            <a>Work</a>
          </li>
          <li className={s.menu_item}>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      <div className={s.social}>
        <a href="#" className={s.social_link}>
          <img src="#" alt="" className={s.social_lnk} />{" "}
        </a>
        <a href="#" className={s.social_link}>
          <img src="#" alt="" className={s.social_tg} />{" "}
        </a>
        <a href="#" className={s.social_link}>
          <img src="#" alt="" className={s.social_gh} />{" "}
        </a>
      </div>
    </div>
  );
};
