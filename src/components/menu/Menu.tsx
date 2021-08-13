import React, { useState, useRef } from "react";

import Hamburger from "./Hamburger";
import { StyledMenu, StyledLink } from "./Menu.styled";

import { useOnClickOutside } from "./HooksForMenu";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node} style={{position: 'absolute'}}>
      <StyledMenu open={open}>
        <StyledLink onClick={() => close()}>About</StyledLink>
        <StyledLink onClick={() => close()}>My Skills</StyledLink>
        <StyledLink onClick={() => close()}>Work</StyledLink>
        <StyledLink onClick={() => close()}>Contact</StyledLink>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;
