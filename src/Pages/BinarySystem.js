import React from "react";
import styled from "styled-components";

export class BinarySystem extends React.Component {
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
        <Jumbotron>
          <div>
            <Label>Hex:</Label>
            <Input
              value={this.state.hex}
              onChange={(event) => this.handleChange(event.target.value, 16)}
            />
          </div>
          <div>
            <Label>Decimal:</Label>
            <Input
              value={this.state.dec}
              onChange={(event) => this.handleChange(event.target.value, 10)}
            />
          </div>
          <div>
            <Label>Octal:</Label>
            <Input
              value={this.state.oct}
              onChange={(event) => this.handleChange(event.target.value, 8)}
            />
          </div>
          <div>
            <Label>Binário:</Label>
            <Input
              value={this.state.bin}
              onChange={(event) => this.handleChange(event.target.value, 2)}
            />
          </div>
        </Jumbotron>
        <h1>Sistema Binário</h1>
        <hr />
        <p>
          O <strong>sistema binário</strong> ou de base 2 é um sistema de
          numeração posicional em que todas as quantidades se representam com
          base em dois números, ou seja, zero e um (0 e 1).
        </p>
        <p>
          Os computadores digitais trabalham internamente com dois níveis de
          tensão, pelo que o seu sistema de numeração natural é o sistema
          binário. Com efeito, num sistema simples como este é possível
          simplificar o cálculo, com o auxílio da lógica booliana. Em
          computação, chama-se um dígito binário (0 ou 1) de bit, que vem do
          inglês Binary Digit. Um agrupamento de 8 bits corresponde a um byte
          (Binary Term). Um agrupamento de 4 bits, ainda, é chamado de nibble.
        </p>
        <p>
          Um processador é formado por milhares de blocos lógicos complexos,
          formados por portas lógicas básicas, e o funcionamento destas está
          amparado por um postulado fundamental à eletrônica digital que
          determina que um circuito opere apenas com dois níveis de tensão bem
          definidos. Em um circuito digital TTL (Transistor Transistor Logic),
          os dois níveis de tensão padronizados são 0V (zero volt) e 5V (cinco
          volts). Ao projetar um sistema digital, ao invés de trabalhar com
          níveis de tensão trabalha-se com níveis lógicos, então, no caso do
          circuito TTL, 0V será representado por “0” e 5V será representado por
          “1”, e os níveis de tensão entre eles serão ignorados, ou seja,
          adotar-se-á uma faixa até a qual será considerado nível lógico zero, e
          a partir dela, nível lógico 1. Neste caso, de 0V a 2,5V temos “0”, e a
          partir daí até 5V temos “1”.
        </p>
        <p>
          O sistema binário é base para a Álgebra booliana (de George Boole —
          matemático inglês), que permite fazer operações lógicas e aritméticas
          usando-se apenas dois dígitos ou dois estados (sim ou não, verdadeiro
          ou falso, tudo ou nada, ligado ou desligado, 1 ou 0). Toda a
          electrónica digital e computação estão baseadas nesse sistema binário
          e na lógica de Boole, que permite representar por circuitos
          electrónicos digitais (portas lógicas) os números, caracteres,
          realizar operações lógicas e aritméticas. Os programas de computadores
          são codificados sob forma binária e armazenados nas mídias (memórias,
          discos, etc) sob esse formato. Assim, para informação armazenada na
          memória RAM do computador, o formato será de voltagem mais alta (1) ou
          mais baixa (0). Em discos magnéticos a binariedade se dará por
          diferença de polaridade, positiva ou negativa.
        </p>
        <h2>Algoritmo</h2>
        <p>
          Na computação, podemos resolver o sistema binário com um simples
          algoritmo de Javascript que utiliza o método{" "}
          <strong>parseInt()</strong>. Onde <em>value</em> é o valor a ser
          convertido, <em>baseFrom</em> é o valor base queremos converter e{" "}
          <em>baseTo</em> é a base que queremos atingir:
          <code>parseInt(value, baseFrom).toString(baseTo)</code>
        </p>
        <h3 align={"center"}>Bases</h3>
        <table cellPadding={8} border={1} align={"center"}>
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
        </table>
        <p>
          Portanto, se queremos converter o valor 248 de decimal (base 10) para
          binário (base 2) fazemos
          <code>parseInt(248, 10).toString(2)</code>
        </p>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 1.5rem 2rem;

  code {
    font-size: 1.2rem;
    background-color: black;
    padding: 4px;
    display: block;
    width: fit-content;
    width: fit-content;
    margin: 1rem auto;
  }
`;

const Jumbotron = styled.div`
    width; 100%;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.03);
    border: 1px #c6c6c6 solid;
`;

const Label = styled.label`
  width: 6rem;
  display: inline-block;
  font-size: 1.2rem;
  height: 2.6rem;
  padding: 0.4rem;
`;

const Input = styled.input`
  height: 2.6rem;
  width: 90%;
  padding: 0.2rem;
`;
