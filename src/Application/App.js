// @flow
import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../style/Themes";
import { GlobalStyles } from "../style/GlobalStyles";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UnitConverter from "../Pages/UnitConverter";
import { NumericSystem } from "../Pages/NumericSystem";
import { Timezone } from "../Pages/Timezone/Timezone";

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
              <UnitConverter />
            </Route>
            <Route path="/sistema-binario">
              <NumericSystem />
            </Route>
            <Route path="/fuso-horario">
              <Timezone />
            </Route>
            <Route path="/analise-combinatoria">
              <p>oi</p>
            </Route>
            <Route path="/calculadora-cientifica">
              <p>oi</p>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
