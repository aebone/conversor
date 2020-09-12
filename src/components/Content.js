import React from "react";
import styled from "styled-components";

class Content extends React.Component {
	render() {
		return (
			<Cards>
				<CardDetail>oi</CardDetail>
				<CardDetail>oi</CardDetail>
				<CardDetail>oi</CardDetail>
			</Cards>
		);
	}
}
export default Content;

const Cards = styled.main`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
	grid-gap: 1rem;
	padding: 1rem;

	@media (max-width: 480px) {
		display: flex;
		flex-direction: column;
	}
`;

const CardDetail = styled.article`
	padding: 1em;
	border: 1px solid;
`;
