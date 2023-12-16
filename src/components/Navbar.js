import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #2846ff;
  height: 50px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #60d3fc;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #b00000;
  }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;