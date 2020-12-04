import React from "react";
import styled from "styled-components";
import { CardDetail, FlexBox } from "../../style/Common";
import { Delete, X, XCircle } from "react-feather";

export class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
    };

    this.showClock = this.showClock.bind(this);
  }

  showClock() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  render() {
    return (
      <CardDetail>
        <CardHeader>
          <h3>{this.props.name}</h3>
          <XCircle size={24} color={"#dc3545"} />
        </CardHeader>
        <div
          className={this.state.isHidden ? "dropdownbtn" : "dropdownbtn open"}
          onClick={this.showClock}
        ></div>
        <div className={this.state.isHidden ? "time hide" : "time show"}>
          {this.props.date.toLocaleTimeString(this.props.country, {
            timeZone: this.props.timeZone,
          })}
        </div>
      </CardDetail>
    );
  }
}

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c6c6c6;
  margin-bottom: 1rem;
`;
