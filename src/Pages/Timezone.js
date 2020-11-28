import React from "react";
import { Container, Jumbotron, PageTitle } from "../style/Common";
import { Clock } from "../utils/Components/Clock";
import TimezonePicker from "../utils/Components/TimezonePicker";

export class Timezone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };

    this.updateDate = this.updateDate.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.updateDate, 1000);
  }

  updateDate() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <Container>
        <PageTitle>Fuso Horário</PageTitle>
        <Jumbotron>
          <TimezonePicker
            value="Asia/Yerevan"
            onChange={(timezone) =>
              console.log("New Timezone Selected:", timezone)
            }
            inputProps={{
              placeholder: "Select Timezone...",
              name: "timezone",
            }}
          />
          <div className="clock-container">
            <div className="clock-name">{this.props.name}</div>
            <div className="items">
              <Clock name="Local Time:" date={this.state.date} />
              <Clock
                name="UK Time:"
                date={this.state.date}
                country={"en-GB"}
                timeZone={"Europe/London"}
              />
              <Clock
                name="US Time:"
                date={this.state.date}
                country={"en-US"}
                timeZone={"America/New_York"}
              />
              <Clock
                name="NZ Time:"
                date={this.state.date}
                country={"en-NZ"}
                timeZone={"Pacific/Chatham"}
              />
            </div>
          </div>
        </Jumbotron>
      </Container>
    );
  }
}
