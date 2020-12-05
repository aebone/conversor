import React from "react";
import { Container, Jumbotron, PageTitle } from "../../style/Common";
import Screen from "./_Screen";
import Keyboard from "./_Keyboard";
import styled from "styled-components";

const math = require("mathjs");
const he = require("he");

export class ScientificCalculator extends React.Component {
  constructor(props) {
    super(props);

    document.title = props.title;

    this.state = {
      result: 0,
      log: "",
      clickedEquals: false,
      ans: 0,
    };
  }

  componentDidMount = () => {
    window.onerror = () =>
      this.setState({ log: "Syntax Error", clickedEquals: true });
    window.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.handleEqualsClick(this.state.log);
      }

      if (e.key.match(/[+\-^]/)) {
        if (this.state.clickedEquals)
          this.setState({ log: "Ans", clickedEquals: false });
      }

      const mathEntities = {
        "*": he.decode("&#x000D7;"),
        "/": he.decode("&divide;"),
      };

      if (e.key.match(/[*/]/)) {
        e.preventDefault();
        const clickedEquals = this.state.clickedEquals;
        if (clickedEquals)
          this.setState({
            log: `Ans${mathEntities[e.key]}`,
            clickedEquals: false,
          });
        else this.setState({ log: this.state.log + mathEntities[e.key] });
      }

      if (!e.key.match(/[+\-^*/]|Enter/)) {
        if (this.state.clickedEquals)
          this.setState({ log: "", clickedEquals: false });
      }
    });
  };

  handleLogChange = (input) => {
    this.setState({ log: input });
  };

  keyClick = (keyLog, math) => {
    const currentLog = this.state.log;
    const clickedEquals = this.state.clickedEquals;
    if (math === "clear") {
      this.setState({ log: "", result: 0 });
    }

    if (math === "delete") {
      if (currentLog.charAt(currentLog.length - 2).match(/[ns]/)) {
        this.setState({ log: currentLog.slice(0, currentLog.length - 4) });
      } else {
        this.setState({ log: currentLog.slice(0, currentLog.length - 1) });
      }
    }

    if (math === "equals") {
      this.handleEqualsClick(currentLog);
    }

    if (math.match(/trig|log|number|comma|prnths|ans|sqrt|exponent/)) {
      if (clickedEquals) this.setState({ log: keyLog, clickedEquals: false });
      else this.setState({ log: currentLog + keyLog });
    }

    if (math.match(/sum|sub|multiply|divide|power|sqr|inv/)) {
      if (clickedEquals)
        this.setState({ log: `Ans${keyLog}`, clickedEquals: false });
      else this.setState({ log: currentLog + keyLog });
    }
  };

  handleEqualsClick = (currentLog) => {
    const times = he.decode("&#x000D7;");
    const divide = he.decode("&divide;");
    const sqrt = he.decode("&radic;");
    const sqrtReg = new RegExp(sqrt, "g");

    // change log so it's understanable to mathjs eval() method
    const newLog = currentLog
      .replace(times, "*")
      .replace(divide, "/")
      .replace(/Ans/g, `(${this.state.ans.toString()})`)
      .replace(/E/g, "10^")
      .replace(/log/g, "log10")
      .replace(/ln/g, "log")
      .replace(sqrtReg, "sqrt");

    let result = math.eval(newLog);
    let finalResult;

    if (currentLog === "") {
      result = 0;
    }

    // trim result if too long
    if (result.toString().length > 11) {
      finalResult = result.toString().slice(0, 11);
    } else finalResult = result;

    this.setState({
      ans: finalResult,
      result: finalResult,
      clickedEquals: true,
    });
  };

  render() {
    return (
      <Container>
        <PageTitle>Calculadora Científica</PageTitle>
        <Jumbotron>
          <Calculator>
            <Screen
              log={this.state.log}
              result={this.state.result}
              handleLogChange={this.handleLogChange}
            />
            <Keyboard keyClick={this.keyClick} />
          </Calculator>
        </Jumbotron>
      </Container>
    );
  }
}

const Calculator = styled.div`
  width: 50%;
  margin: auto;
  padding: 2rem;
  border-radius: 2rem;
  background: #4b5568;
`;
