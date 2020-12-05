import React from "react";
import { Container, Jumbotron, PageTitle } from "../../style/Common";

export const ScientificCalculator = (props) => {
  document.title = props.title;

  return (
    <Container>
      <PageTitle>Calculadora Científica</PageTitle>

      <Jumbotron></Jumbotron>
    </Container>
  );
};
