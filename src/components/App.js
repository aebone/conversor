// @flow
import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../style/Themes";
import { GlobalStyles } from "../style/GlobalStyles";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Content from "./Content";

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
            <Route path="/sistema-binario">
              <h1>soon</h1>
            </Route>
            <Route path="/">
              <Content />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
