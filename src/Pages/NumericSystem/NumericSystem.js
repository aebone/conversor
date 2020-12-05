import React from "react";
import {
  Container,
  FlexBox,
  Input,
  Jumbotron,
  PageTitle,
  Label,
} from "../../style/Common";

export class NumericSystem extends React.Component {
  state = {
    hex: 1,
    dec: 1,
    oct: 1,
    bin: 1,
  };

  handleChange(value, baseFrom) {
    this.setState({ hex: parseInt(value, baseFrom).toString(16) });
    this.setState({ dec: parseInt(value, baseFrom).toString(10) });
    this.setState({ oct: parseInt(value, baseFrom).toString(8) });
    this.setState({ bin: parseInt(value, baseFrom).toString(2) });
  }

  render() {
    return (
      <Container>
        <PageTitle>Sistema Numérico</PageTitle>
        <Jumbotron>
          <FlexBox>
            <Label htmlFor={"hex-input"}>Hexadecimal</Label>
            <Input
              id={"hex-input"}
              value={this.state.hex}
              onChange={(event) => this.handleChange(event.target.value, 16)}
            />
          </FlexBox>
          <FlexBox>
            <Label htmlFor={"dec-input"}>Decimal</Label>
            <Input
              id={"dec-input"}
              value={this.state.dec}
              onChange={(event) => this.handleChange(event.target.value, 10)}
            />
          </FlexBox>
          <FlexBox>
            <Label htmlFor={"oct-input"}>Octal</Label>
            <Input
              id={"oct-input"}
              value={this.state.oct}
              onChange={(event) => this.handleChange(event.target.value, 8)}
            />
          </FlexBox>
          <FlexBox>
            <Label htmlFor={"bin-input"}>Binário</Label>
            <Input
              id={"bin-input"}
              value={this.state.bin}
              onChange={(event) => this.handleChange(event.target.value, 2)}
            />
          </FlexBox>
        </Jumbotron>

        <p>
          Um <strong>sistema numérico</strong> é um sistema em que um conjunto
          de números são representados por numerais de uma forma consistente.
          Pode ser visto como o contexto que permite ao numeral "11" ser
          interpretado como o numeral romano para dois, o numeral binário para
          três ou o numeral decimal para onze.
        </p>
        <p>
          O sistema de numeração decimal (ou na base 10), que usa dez algarismos
          é sem duvida o sistema mais utilizado por seres humanos. Já o sistema
          binário é o mais frequente no mundo da computação, onde apenas os
          valores 0 e 1 são utilizados (pois facilita a representação de
          tensões), no entanto, existem outros sistemas como o de numeração
          Octal e Hexadecimal.
        </p>
        <p>
          A conversão entre sistemas numéricos é realizada com base em regras. A
          quantidade de algarismos disponíveis em um sistema de numeração
          designa-se de base, sendo que a representação numérica mais utilizada
          é a notação posicional (valor atribuído a um símbolo dependente da
          posição em que este se encontra, num conjunto de símbolos).
        </p>
        <h3 align={"center"}>Bases</h3>
        <table cellPadding={8} border={1} align={"center"}>
          <tbody>
            <tr>
              <th>
                <strong>Binário</strong>
              </th>
              <th>
                <strong>Octal</strong>
              </th>
              <th>
                <strong>Decimal</strong>
              </th>
              <th>
                <strong>Hexadecimal</strong>
              </th>
            </tr>
            <tr>
              <td>
                <em>Base 2</em>
              </td>
              <td>
                <em>Base 8</em>
              </td>
              <td>
                <em>Base 10</em>
              </td>
              <td>
                <em>Base 16</em>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Sistema binário</h2>
        <p>
          O sistema binário é o sistema mais utilizado por máquinas, uma vez que
          os sistemas digitais trabalham internamente com dois estados
          (ligado/desligado, verdadeiro/falso, aberto/fechado). O sistema
          binário utiliza os símbolos 0 e 1, sendo cada símbolo designado por
          bit (binary digit).
        </p>
        <h2>Sistema octal</h2>
        <p>
          O sistema octal é um sistema de numeração de base 8, ou seja, recorre
          a 8 símbolos (0,1,2,3,4,5,6,7) para a representação de um determinado
          valor. O sistema octal foi muito utilizado no mundo da computação como
          uma alternativa mais compacta do sistema binário. Atualmente, o
          sistema hexadecimal é um dos mais utilizado como alternativa viável ao
          sistema binário.
        </p>
        <h2>Sistema decimal</h2>
        <p>
          O sistema decimal é o sistema mais utilizado pelos seres humanos,
          normalmente para indicar quantidades, e é constituído por dez
          algarismos: 0,1,2,3,4,5,6,7,8,9.
        </p>
        <p>
          No sistema decimal cada algarismo tem um valor posicional, ou seja,
          cada algarismo tem um peso de acordo com a sua posição na
          representação do valor.
        </p>
        <h2>Sistema hexadecimal</h2>
        <p>
          Sistema de numeração muito utilizado na programação de
          microprocessadores, especialmente nos equipamentos de estudo e
          sistemas de desenvolvimento. Utiliza os símbolos: 0,1,2,3,4,5,6,7,8,9
          do sistema decimal e as letras A,B,C,D,E,F. Equivalências:
          A=10,B=11,C=12,D=13,E=14eF=15.
        </p>
        <h2>Algoritmo</h2>
        <p>
          Na computação, podemos resolver o <strong>sistema numérico</strong>{" "}
          com um simples algoritmo de Javascript que utiliza o método
          <strong>parseInt()</strong>. Onde <em>value</em> é o valor a ser
          convertido, <em>baseFrom</em> é o valor base queremos converter e{" "}
          <em>baseTo</em> é a base que queremos atingir:
          <code>parseInt(value, baseFrom).toString(baseTo)</code>
        </p>
        <p>
          Portanto, se queremos converter o valor 248 de decimal (base 10) para
          binário (base 2) fazemos
          <code>parseInt(248, 10).toString(2)</code>
        </p>
      </Container>
    );
  }
}
