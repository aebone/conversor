import React from "react";
import styled from "styled-components";
import { units } from "../utils/units";
const convert = require("convert-units");

class Content extends React.Component {
  state = {
    length: {
      value: 1,
      from: "mi",
      to: "km",
    },
  };

  render() {
    return (
      <Cards>
        {units.map((unit) => {
          return (
            <CardDetail key={unit.key}>
              <h2>{unit.label}</h2>
              <div>
                <label>Valor</label>
                <input
                  type={"number"}
                  value={this.state[unit.key].value}
                  onChange={(event) =>
                    this.setState({
                      [unit.key]: {
                        ...this.state[unit.key],
                        value: event.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label>De</label>
                <select
                  value={this.state[unit.key].from}
                  onChange={(event) =>
                    this.setState({
                      [unit.key]: {
                        ...this.state[unit.key],
                        from: event.target.value,
                      },
                    })
                  }
                >
                  {unit.options.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label>Para</label>
                <select
                  value={this.state[unit.key].to}
                  onChange={(event) =>
                    this.setState({
                      [unit.key]: {
                        ...this.state[unit.key],
                        to: event.target.value,
                      },
                    })
                  }
                >
                  {unit.options.map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              {convert(this.state[unit.key].value)
                .from(this.state[unit.key].from)
                .to(this.state[unit.key].to)}
            </CardDetail>
          );
        })}
      </Cards>
    );
  }
}
export default Content;

const Cards = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  grid-gap: 1rem;
  padding: 1.5rem 1rem;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const CardDetail = styled.article`
  padding: 1em;
  border: 1px solid;
`;
