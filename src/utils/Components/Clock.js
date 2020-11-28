import React from "react";

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
      <div className="clock">
        <div className="clock-title">
          <div className="items header">{this.props.name}</div>
          <div
            className={this.state.isHidden ? "dropdownbtn" : "dropdownbtn open"}
            onClick={this.showClock}
          ></div>
        </div>
        <div className={this.state.isHidden ? "time hide" : "time show"}>
          {this.props.date.toLocaleTimeString(this.props.country, {
            timeZone: this.props.timeZone,
          })}
        </div>
      </div>
    );
  }
}
