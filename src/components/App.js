import React from 'react';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../style/Themes";
import { GlobalStyles } from "../style/GlobalStyles";
import Header from './Header';

class App extends React.Component {

  state = { theme: "light" };

  changeTheme = () => {
    this.state.theme === "light"
      ? this.setState({ theme: "dark" })
      : this.setState({ theme: "light" });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <Header changeTheme={this.changeTheme} theme={this.state.theme}/>
      </ThemeProvider>
    );
  }
}

export default App;
