import React from "react";
import styled from "styled-components";
import LightBulb from "./icons/LightBulb";

const Header = ({ changeTheme, theme }) => {
	return (
		<StyledHeader theme={theme} role="banner">
			<Logo>+- ×÷</Logo>
			<h1>Conversor de Medidas</h1>
			<ChangeTheme tabIndex={"0"} role={"button"} aria-pressed={theme==="dark"} id={"change-theme"} onClick={changeTheme} onKeyPress={changeTheme}>
				<LightBulb width={12} />
			</ChangeTheme>
		</StyledHeader>
	);
};

export default Header;

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	padding: 0 2rem;
`;

const ChangeTheme = styled.div`
	cursor: pointer;
	margin-left: auto;
	padding: 0.2rem 0.5rem;
	border: 1px solid;
	border-radius: 5px;
	transition: 0.5s all ease-out;
	
	&:hover {
		color: ${props => props.theme.headerBody};
		background: ${props => props.theme.headerText};
	}
`;

const Logo = styled.span`
	font-family: "Source Code Pro", monospace;
	display: inline-flex;
	align-items: center;
	text-align: center;
	width: 2rem;
	height: 2rem;
	padding: 0.4rem;
	border-radius: 2rem;
	margin-right: 1rem;
	line-height: 0.8rem;
	color: ${props => props.theme.headerBody};
	background: ${props => props.theme.headerText};
`;
