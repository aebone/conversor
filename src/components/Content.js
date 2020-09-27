import React from "react";
import styled from "styled-components";
import { getWeight } from "../helpers/calculations";
import { units } from "../constants/Units";

class Content extends React.Component {
  state = {
    weight: { from: "lb", to: "lb", value: 1 },
    temperature: { from: "c", to: "c", value: 1 },
  };

  render() {
    return (
      <Cards>
        {units.map((unit, index) => {
          return (
            <CardDetail key={index}>
              <h2>{unit.name}</h2>
              <div>
                <label htmlFor={unit.id}>Valor</label>
                <input
                  value={this.state[unit.id].value}
                  onChange={(event) =>
                    this.setState({
                      [unit.id]: {
                        ...this.state[unit.id],
                        value: event.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label>De</label>
                <select
                  value={this.state[unit.id].from}
                  onChange={(event) =>
                    this.setState({
                      [unit.id]: {
                        ...this.state[unit.id],
                        from: event.target.value,
                      },
                    })
                  }
                >
                  {unit.options.map((option, index) => {
                    return (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label>Para</label>
                <select
                  value={this.state[unit.id].to}
                  onChange={(event) =>
                    this.setState({
                      [unit.id]: {
                        ...this.state[unit.id],
                        to: event.target.value,
                      },
                    })
                  }
                >
                  {unit.options.map((option, index) => {
                    return (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                {getWeight(
                  this.state[unit.id].from,
                  this.state[unit.id].to,
                  this.state[unit.id].value
                )}
              </div>
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
