import React, { useState, useRef } from "react";

import Hamburger from "./Hamburger";
import { StyledMenu, StyledLink } from "./Menu.styled";

import { useOnClickOutside } from "./HooksForMenu";
import { Link } from "react-scroll";
import s from "../navigation/Navigation.module.scss";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement | HTMLLinkElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    // @ts-ignore

    <div ref={node} style={{ position: "absolute" }}>
      <StyledMenu open={open}>
        <StyledLink>
          <Link
            onClick={() => close()}
            className={s.menu_link}
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Main
          </Link>
        </StyledLink>
        <StyledLink>
          <Link
            onClick={() => close()}
            className={s.menu_link}
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Work
          </Link>
        </StyledLink>
        <StyledLink onClick={() => close()}>
          <Link
            onClick={() => close()}
            className={s.menu_link}
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </StyledLink>
        <StyledLink>
          <Link
            onClick={() => close()}
            className={s.menu_link}
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </StyledLink>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;
