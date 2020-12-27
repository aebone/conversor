// @flow
import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../style/Themes";
import { GlobalStyles } from "../style/GlobalStyles";
import Header from "./Header";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UnitConverter from "../Pages/UnitConverter/UnitConverter";
import { NumericSystem } from "../Pages/NumericSystem/NumericSystem";
import { Timezone } from "../Pages/Timezone/Timezone";
import { CombinatorialAnalysis } from "../Pages/CombinatoryAnalysis/CombinatorialAnalysis";

class App extends React.Component {
  state = { theme: "light" };

  changeTheme = () => {
    this.state.theme === "light"
      ? this.setState({ theme: "dark" })
      : this.setState({ theme: "light" });
  };

  render() {
    return (
      <ThemeProvider
        theme={this.state.theme === "light" ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        <Router>
          <Header changeTheme={this.changeTheme} theme={this.state.theme} />
          <Switch>
            <Route exact path="/">
              <Redirect to={"/conversor-de-medidas"} />
            </Route>
            <Route path="/conversor-de-medidas">
              <UnitConverter
                title={"Conversor de Medidas | Conversor de Unidades"}
              />
            </Route>
            <Route path="/sistema-numerico">
              <NumericSystem
                title={"Conversor de Medidas | Sistema Numérico"}
              />
            </Route>
            <Route path="/fuso-horario">
              <Timezone title={"Conversor de Medidas | Fuso Horário"} />
            </Route>
            <Route path="/analise-combinatoria">
              <CombinatorialAnalysis
                title={"Conversor de Medidas | Análise Combinatória"}
              />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
