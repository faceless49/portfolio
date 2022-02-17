import styled from "styled-components";
import { colors } from "./global";

export const StyledMenu = styled.nav<{ open: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  z-index: 5;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
`;

export const StyledLink = styled.a`
  text-align: center;
  display: block;
  font-size: 1rem;
  color: #909096;
  line-height: 5rem;
  cursor: pointer;
  border-bottom: 1px solid #282828;
  z-index: 5;

  :hover {
    color: ${colors.maincolor};
    transition: 0.3s ease all;
    cursor: pointer;
  }
`;
