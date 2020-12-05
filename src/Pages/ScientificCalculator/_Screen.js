import React, { Component } from "react";
import Result from "./_Result";
import Log from "./_Log";
import styled from "styled-components";

export default class Screen extends Component {
  render() {
    return (
      <Wrapper>
        <Log
          log={this.props.log}
          handleLogChange={this.props.handleLogChange}
        />
        <Result result={this.props.result} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  font-family: "monospace";
  text-align: right;
  padding: 1rem;
  font-size: 2rem;
  margin: 1rem;
  background: #b2c2b3;
`;
