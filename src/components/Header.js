import React from "react";
import styled from "styled-components";
import LightBulb from "./icons/LightBulb";
import { Activity, Cpu } from "react-feather";
import { Link } from "react-router-dom";

const Header = ({ changeTheme, theme }) => {
  return (
    <>
      <StyledHeader theme={theme} role="banner">
        <Link to="/">
          <Logo>
            <Activity />
          </Logo>
        </Link>
        <h1>Conversor de Medidas</h1>
        <ChangeTheme
          tabIndex={"0"}
          role={"button"}
          aria-pressed={theme === "dark"}
          id={"change-theme"}
          onClick={changeTheme}
          onKeyPress={changeTheme}
        >
          <LightBulb width={12} />
        </ChangeTheme>
      </StyledHeader>
      <Nav role={"navigation"}>
        <ul>
          <Link to="/sistema-binario">
            <ListItem>
              <Cpu width={16} />
              <span>Sistema Binário</span>
            </ListItem>
          </Link>
        </ul>
      </Nav>
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0 5px 20px -10px #000;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0rem 2rem;
  box-shadow: 0 5px 20px -10px #000;

  a {
    text-decoration: none;
  }
`;

const ChangeTheme = styled.div`
  cursor: pointer;
  margin-left: auto;
  padding: 0.2rem 0.5rem;
  border: 1px solid;
  border-radius: 5px;

  &:hover {
    color: ${(props) => props.theme.headerBody};
    background: ${(props) => props.theme.headerText};
  }
`;

const Logo = styled.span`
  display: inline-flex;
  align-items: center;
  text-align: center;
  width: 2rem;
  height: 2rem;
  padding: 0.4rem;
  border-radius: 2rem;
  margin-right: 1rem;
  color: ${(props) => props.theme.headerBody};
  background: ${(props) => props.theme.headerText};
`;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;

  > span {
    font-size: 0.8rem;
    padding: 0rem 0.5rem;
  }
`;
