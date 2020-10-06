import React from "react";
import styled from "styled-components";
import { units } from "../utils/units";
import { KILOMETER, MILE } from "../utils/length";
import { KILOMETER_PER_HOUR, MILE_PER_HOUR } from "../utils/speed";
import { SQUARE_METER, SQUARE_MILE } from "../utils/area";
import { DAY, HOUR } from "../utils/time";
import { GRADIAN, RADIAN } from "../utils/angle";
const convert = require("convert-units");

class Content extends React.Component {
  state = {
    length: { value: 1, from: MILE, to: KILOMETER },
    speed: { value: 1, from: MILE_PER_HOUR, to: KILOMETER_PER_HOUR },
    area: { value: 1, from: SQUARE_METER, to: SQUARE_MILE },
    time: { value: 1, from: DAY, to: HOUR },
    angle: { value: 1, from: GRADIAN, to: RADIAN },
  };

  render() {
    return (
      <Cards>
        {units.map((unit) => {
          return (
            <CardDetail key={unit.key}>
              <h2>{unit.label}</h2>
              <div>
                <label for={unit.key}>Valor</label>
                <input
                  id={unit.key}
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
