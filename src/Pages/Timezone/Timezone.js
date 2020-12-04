import React from "react";
import {
  CardDetail,
  CenteredLabel,
  Container,
  Jumbotron,
  PageTitle,
} from "../../style/Common";
import TimezonePicker from "./TimezonePicker";
import styled from "styled-components";
import _ from "lodash";
import { XCircle } from "react-feather";

export class Timezone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      timezoneName: "",
      timezones: [],
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateDate, 1000);
  }

  updateDate = () => {
    this.setState({
      date: new Date(),
    });
  };

  setTimezone = (timezone) => {
    this.setState({ timezoneName: timezone.name });
    this.setState({ timezones: [...this.state.timezones, timezone] });
  };

  removeTimezone = (uniqueTimezone) => {
    let updatedTimezones = _.filter(this.state.timezones, (timezone) => {
      return timezone !== uniqueTimezone;
    });

    this.setState({ timezones: updatedTimezones });
  };

  render() {
    return (
      <Container>
        <PageTitle>Fuso Horário</PageTitle>
        <Jumbotron>
          <CenteredLabel htmlFor={"timezone-picker"}>
            Selecione um fuso horário
          </CenteredLabel>
          <TimezonePicker
            value={this.state.timezoneName}
            onChange={(timezone) => this.setTimezone(timezone)}
            inputProps={{
              placeholder: "Selecione um fuso horário",
            }}
          />
        </Jumbotron>

        <Cards>
          <CardDetail>
            <CardHeader>
              <h3>Local Time</h3>
            </CardHeader>
            <Time>{this.state.date.toLocaleTimeString("pt-BR")}</Time>
          </CardDetail>

          {_.map(_.uniq(this.state.timezones), (uniqueTimezone) => {
            return (
              <CardDetail key={uniqueTimezone.name}>
                <CardHeader>
                  <h3>{uniqueTimezone.label}</h3>
                  <XCircle
                    onClick={() => this.removeTimezone(uniqueTimezone)}
                    size={24}
                    color={"#dc3545"}
                  />
                </CardHeader>
                <Time>
                  {this.state.date.toLocaleTimeString("pt-BR", {
                    timeZone: uniqueTimezone.name,
                  })}
                </Time>
              </CardDetail>
            );
          })}
        </Cards>
      </Container>
    );
  }
}

const Cards = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 0fr));
  grid-gap: 1rem;
  padding: 1.5rem 0;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c6c6c6;
  margin-bottom: 1rem;
`;

const Time = styled.span`
  display: block;
  text-align: center;
  font-family: monospace;
  font-style: italic;
  font-size: 2rem;
  font-weight: bold;
`;
