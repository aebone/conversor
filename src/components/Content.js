import React from "react";
import styled from "styled-components";
import { getWeight } from "../helpers/calculations";
import { weight } from "../constants/Options";

class Content extends React.Component {
  state = { from: "", to: "" };
  render() {
    return (
      <Cards>
        <CardDetail>
          <h2>Peso</h2>
          <div>
            <label>Valor</label>
            <input />
          </div>
          <div>
            <label>De</label>
            <select>
              {weight.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Para</label>
            <select>
              {weight.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button>Converter</button>
          <p>{getWeight(9, 8)}</p>
        </CardDetail>
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
