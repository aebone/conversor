import React from "react";
import styled from "styled-components";
import { units } from "../utils/units";
import { KILOMETER, MILE } from "../utils/length";
import { KILOMETER_PER_HOUR, MILE_PER_HOUR } from "../utils/speed";
import { SQUARE_METER, SQUARE_MILE } from "../utils/area";
import { DAY, HOUR } from "../utils/time";
import { GRADIAN, RADIAN } from "../utils/angle";
import { KILOGRAM, POUND } from "../utils/mass";
import { LITRE, MILLILITRE } from "../utils/volume";
import { JOULE, WATT_HOUR } from "../utils/energy";
import { CELSIUS, FAHRENHEIT } from "../utils/temperature";
import { HERTZ, MILLIHERTZ } from "../utils/frequency";
import { BAR, PASCAL } from "../utils/pressure";
import { GIGABYTE, MEGABYTE } from "../utils/digital";
const convert = require("convert-units");

class Content extends React.Component {
  state = {
    length: { value: 1, from: MILE, to: KILOMETER },
    speed: { value: 1, from: MILE_PER_HOUR, to: KILOMETER_PER_HOUR },
    area: { value: 1, from: SQUARE_METER, to: SQUARE_MILE },
    time: { value: 1, from: DAY, to: HOUR },
    angle: { value: 1, from: GRADIAN, to: RADIAN },
    mass: { value: 1, from: KILOGRAM, to: POUND },
    volume: { value: 1, from: LITRE, to: MILLILITRE },
    energy: { value: 1, from: WATT_HOUR, to: JOULE },
    temperature: { value: 1, from: CELSIUS, to: FAHRENHEIT },
    frequency: { value: 1, from: HERTZ, to: MILLIHERTZ },
    pressure: { value: 1, from: PASCAL, to: BAR },
    digital: { value: 1, from: MEGABYTE, to: GIGABYTE },
  };

  render() {
    return (
      <Cards>
        {units.map((unit) => {
          return (
            <CardDetail key={unit.key}>
              <h2>{unit.label}</h2>
              <InputRow>
                <label htmlFor={unit.key}>Valor</label>
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
              </InputRow>
              <InputRow>
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
                  {unit.options.map((option, index) => {
                    return (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
              </InputRow>
              <InputRow>
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
                  {unit.options.map((option, index) => {
                    return (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
              </InputRow>
              <Result>
                {convert(this.state[unit.key].value)
                  .from(this.state[unit.key].from)
                  .to(this.state[unit.key].to)}
              </Result>
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
  padding: 1rem;
  border: 1px solid;
`;

const InputRow = styled.div`
  display: flex;
  margin: 10px 0;

  label {
    width: 20%;
    text-align: right;
    padding: 5px 10px;
  }

  input,
  select {
    flex-grow: 1;
  }
`;

const Result = styled.p`
  text-align: right;
  font-weight: bold;
`;
