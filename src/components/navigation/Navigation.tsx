import s from "./Navigation.module.scss";
import logo from "./../../assets/kolesnikov-01.svg";
// @ts-ignore
import { Link } from "react-scroll";

export const Navigation = (props: any) => {
  return (
    <div className={s.navigation_wrap}>
      <a href="#" className={s.nav_link}>
        <img src={logo} alt="" className={s.logo} />
      </a>

      <nav className={s.menu}>
        <ul className={s.menu_list}>
          <li className={s.menu_item}>
            <Link
              className={s.menu_link}
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Main
            </Link>
          </li>
          <li className={s.menu_item}>
            <Link
              className={s.menu_link}
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className={s.menu_item}>
            <Link
              className={s.menu_link}
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li className={s.menu_item}>
            <Link
              className={s.menu_link}
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
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
