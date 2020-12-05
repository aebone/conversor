import React, { useState } from "react";
import {
  Button,
  Container,
  FlexBox,
  FlexRightContainer,
  Input,
  Jumbotron,
  Label,
  PageTitle,
  Select,
} from "../../style/Common";
import styled from "styled-components";
import {
  SIMPLE_ARRANGEMENT,
  ARRANGEMENT_WITH_REPETITION,
  PERMUTATION,
  SIMPLE_COMBINATION,
  COMBINATION_WITH_REPETITION,
  simpleArrangement,
  arrangementWithRepetition,
  permutation,
  simpleCombination,
  combinationWithRepetition,
} from "../../utils/combinatory-analysis";

export const CombinatorialAnalysis = (props) => {
  document.title = props.title;
  const [result, setResult] = useState();

  const calculate = () => {
    switch (type) {
      case SIMPLE_ARRANGEMENT:
        setResult(simpleArrangement(numberOfElements, numberOfGroups));
        break;
      case ARRANGEMENT_WITH_REPETITION:
        setResult(arrangementWithRepetition(numberOfElements, numberOfGroups));
        break;
      case PERMUTATION:
        setResult(permutation(numberOfElements));
        break;
      case SIMPLE_COMBINATION:
        setResult(simpleCombination(numberOfElements, numberOfGroups));
        break;
      case COMBINATION_WITH_REPETITION:
        setResult(combinationWithRepetition(numberOfElements, numberOfGroups));
        break;
    }
  };

  const [type, setType] = useState("simple-arrangement");
  const [numberOfElements, setNumberOfElements] = useState(1);
  const [numberOfGroups, setNumberOfGroups] = useState(1);

  return (
    <Container>
      <PageTitle>Análise Combinatória</PageTitle>
      <Jumbotron>
        <FlexBox>
          <Label htmlFor="type">Escolha o tipo</Label>
          <Select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value={SIMPLE_ARRANGEMENT}>Arranjo Simples</option>
            <option value={ARRANGEMENT_WITH_REPETITION}>
              Arranjo Com Repetição
            </option>
            <option value={PERMUTATION}>Permutação</option>
            <option value={SIMPLE_COMBINATION}>Combinação Simples</option>
            <option value={COMBINATION_WITH_REPETITION}>
              Combinação Com Repetição
            </option>
          </Select>
        </FlexBox>
        <FlexBox>
          <Label htmlFor="number-of-elements">Número de elementos</Label>
          <Input
            type="number"
            id="number-of-elements"
            placeholder="Número de elementos"
            value={numberOfElements}
            onChange={(e) => setNumberOfElements(e.target.value)}
          />
        </FlexBox>
        <FlexBox>
          <Label htmlFor="number-of-groups">Número de grupos</Label>
          <Input
            type="number"
            id="number-of-groups"
            placeholder="Número de grupos"
            disabled={type === PERMUTATION}
            value={numberOfGroups}
            onChange={(e) => setNumberOfGroups(e.target.value)}
          />
        </FlexBox>
        <FlexRightContainer>
          <Button onClick={() => calculate()}>Calcular</Button>
        </FlexRightContainer>
        <Label>Resultado</Label>
        <Result>{result}</Result>
      </Jumbotron>

      <p>
        <em>Análise combinatória</em> é um conjunto de procedimentos que
        possibilita a construção de grupos diferentes formados por um número
        finito de elementos de um conjunto sob certas circunstâncias. Os tipos
        mais conhecidos são (tomando-se conjuntos de m elementos):
      </p>
      <h2>Arranjos</h2>
      <p>
        São agrupamentos formados por p elementos, de forma que os p elementos
        sejam distintos entre si pela ordem ou pela espécie. Há duas formas
        principais:
      </p>
      <h3>Simples</h3>
      <p>
        Não ocorre a repetição de qualquer elemento em cada grupo de p
        elementos;
        <br />
        Ex.: considerando as letras A,B,C,D, quantos pares de letras distintas
        pode-se formar?
        <br />
        Considerando que AB é diferente de BA, então tem-se um arranjo.
        <br />
        m = 4<br />
        p = 2<br />
        AS(m,p) = m! / (m-p)!
        <br />
        AS(4,2) = 4! / (4-2)! = 12
        <br />
        &#x7B;AB, AC, AD, BA, BC, BD, CA, CB, CD, DA, DB, DCDC&#x7D;
      </p>
      <h3>Com Repetição</h3>
      <p>
        Todos os elementos podem aparecer repetidos em cada grupo de p
        elementos;
        <br />
        Ex.: considerando as letras A,B,C,D, quantos pares de letras (não
        necessariamente distintas) pode-se formar? Considerando que AB é
        diferente de BA, então tem-se um arranjo.
        <br />
        m = 4<br />
        p = 2<br />
        AR(m,p) = mp
        <br />
        AR(4,2) = 42 = 16
        <br />
        &#x7B;AA,AB,AC,AD,BA,BB,BC,BD,CA,CB,CC,CD,DA,DB,DC,DD&#x7D;
      </p>
      <h2>Permutações</h2>
      <p>
        São agrupamentos considerando os m elementos, de forma que os m
        elementos sejam distintos entre si pela ordem.
        <br />
        Ex.: considerando as letras A,B,C, quantas combinações distintas pode-se
        formar?
        <br />
        m = 3<br />
        P(m) = m!
        <br />
        P(3) = 3! = 6<br />
        &#x7B;ABC,ACB,BAC,BCA,CAB,CBA&#x7D;
      </p>
      <h2>Combinações</h2>
      <p>
        São agrupamentos formados por p elementos, de forma que os p elementos
        sejam distintos entre si apenas pela espécie. Há duas formas principais:
      </p>
      <h3>Simples</h3>
      <p>
        Não ocorre a repetição de qualquer elemento em cada grupo de p
        elementos;
        <br />
        Ex.: considerando as letras A,B,C,D, quantos pares de letras distintas
        pode-se formar? Considerando que AB e BA são o mesmo par, então tem-se
        uma combinação.
        <br />
        m = 4<br />
        p = 2<br />
        CS(m,p) = m! / ((m-p)! * p!)
        <br />
        CS(4,2) = 4! / (2! * 2!) = 6<br />
        &#x7B;AB, AC, AD, BC, BD, CD&#x7D;
      </p>
      <h3>Com Repetição</h3>

      <p>
        Todos os elementos podem aparecer repetidos em cada grupo até p vezes;
        <br />
        Ex.: considerando as letras A,B,C,D, quantos pares de letras (não
        necessariamente distintas) pode-se formar? Considerando que AB e BA são
        o mesmo par, então tem-se uma combinação.
        <br />
        m = 4<br />
        p = 2<br />
        CR(m,p) = CS(m+p-1,p)
        <br />
        CR(4,2) = CS(5,2) = 5! / (3! * 2!) = 10
        <br />
        &#x7B;AA,AB,AC,AD,BB,BC,BD,CC,CD,DD&#x7D;
      </p>
    </Container>
  );
};

const Result = styled.p`
  display: inline;
  font-weight: bold;
  font-size: 2rem;
`;
