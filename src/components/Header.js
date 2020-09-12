import React from "react";
import styled from "styled-components";
import LightBulb from "./icons/LightBulb";

const Header = ({ changeTheme, theme }) => {
	return (
		<StyledHeader theme={theme} role="banner">
			<h1>Conversor de Medidas</h1>
			<ChangeTheme onClick={changeTheme}>
				<LightBulb width={20} />
			</ChangeTheme>
		</StyledHeader>
	);
};

export default Header;

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
`;

const ChangeTheme = styled.div`
	cursor: pointer;
`;
