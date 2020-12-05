import React from "react";
import styled from "styled-components";
import {
  Activity,
  Cpu,
  GitPullRequest,
  Map,
  Moon,
  Sun,
  Thermometer,
} from "react-feather";
import { Link, NavLink } from "react-router-dom";

const Header = ({ changeTheme, theme }) => {
  return (
    <>
      <StyledHeader theme={theme} role="banner">
        <Link to="/conversor-de-medidas">
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
          {theme === "dark" ? <Sun /> : <Moon />}
        </ChangeTheme>
      </StyledHeader>
      <Nav role={"navigation"}>
        <NavLink to={"/conversor-de-medidas"} activeClassName={"active"}>
          <NavItem>
            <Activity width={16} />
            <span>Conversor de Medidas</span>
          </NavItem>
        </NavLink>
        <NavLink to="/sistema-numerico">
          <NavItem>
            <Cpu width={16} />
            <span>Sistema Numérico</span>
          </NavItem>
        </NavLink>
        <NavLink to="/fuso-horario">
          <NavItem>
            <Map width={16} />
            <span>Fuso Horário</span>
          </NavItem>
        </NavLink>
        <NavLink to="/analise-combinatoria">
          <NavItem>
            <GitPullRequest width={16} />
            <span>Análise Combinatória</span>
          </NavItem>
        </NavLink>
        <NavLink to="/calculadora-cientifica">
          <NavItem>
            <Thermometer width={16} />
            <span>Calculadora Científica</span>
          </NavItem>
        </NavLink>{" "}
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
  padding: 1rem 2rem;
  box-shadow: 0 5px 20px -10px #000;
  justify-content: space-evenly;

  a {
    padding-bottom: 0.6rem;
    text-decoration: none;
    color: ${(props) => props.theme.text};
    border-bottom: 4px solid ${(props) => props.theme.grayed};
  }

  a.active {
    padding-bottom: 0.6rem;
    border-bottom: 4px solid ${(props) => props.theme.highlight};
  }
`;

const ChangeTheme = styled.div`
  cursor: pointer;
  margin-left: auto;
  padding: 0.3rem 0.4rem 0.1rem 0.3rem;

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

const NavItem = styled.span`
  list-style: none;
  display: flex;
  align-items: center;

  > span {
    font-size: 0.8rem;
    padding: 0rem 0.5rem;
  }
`;
