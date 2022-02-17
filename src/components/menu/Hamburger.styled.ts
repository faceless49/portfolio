import styled from "styled-components";

import { colors } from "./global";

export const StyledHamburger = styled.button<{ open: boolean }>`
  position: fixed;
  right: 70px;
  top: 30px;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border: none;
  cursor: pointer;
  outline: none;
  z-index: 5;
  @media (min-width: 1300px) {
    display: none;
  }

  :hover {
    div {
      background-color: ${colors.maincolor};
      transition: 0.3s ease all;
      cursor: pointer;
    }
  }

  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: ${({ open }) =>
      open ? colors.textColor : colors.textColor};

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
