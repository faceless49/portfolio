import s from "./Navigation.module.scss";
import logo from "./../../assets/kolesnikov-01.svg";
// @ts-ignore
import { Link } from "react-scroll";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { far } from "@fortawesome/free-regular-svg-icons";

export const Navigation = () => {
  library.add(fab);
  library.add(far);
  return (
    <div className={s.navigation_wrap}>
      <a
        href="https://github.com/faceless49"
        className={s.nav_link}
        target="_blank"
        rel="noreferrer"
      >
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
        <a
          className={s.social_link}
          href={"https://www.linkedin.com/in/egor-kolesnikov"}
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size={"2x"} />
        </a>
        <a className={s.social_link} href={"https://t.me/faceless49"}>
          <FontAwesomeIcon icon={["fab", "telegram"]} size={"2x"} />
        </a>
        <a className={s.social_link} href={"mailto:kolesnikov49r@gmail.com"}>
          <FontAwesomeIcon icon={["far", "envelope"]} size={"2x"} />
        </a>
      </div>
    </div>
  );
};
