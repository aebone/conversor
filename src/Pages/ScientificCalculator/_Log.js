import React, { Component } from "react";
import styled from "styled-components";

export default class Log extends Component {
  constructor(props) {
    super(props);
    this.handleLogChange = this.handleLogChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", () => this.ref.focus());
  }

  componentDidUpdate() {
    this.ref.focus();
  }

  handleLogChange() {
    this.props.handleLogChange(this.ref.value);
  }

  render() {
    return (
      <Input
        type="text"
        className="log"
        ref={(a) => {
          this.ref = a;
        }}
        value={this.props.log}
        onChange={this.handleLogChange}
        autoFocus
      />
    );
  }
}

const Input = styled.input`
  font-family: "monospace";
  background-color: #b2c2b3;
  height: 44px;
  text-align: left;
  outline: none;
  width: 100%;
  border: none;
  font-size: 1em;
`;
