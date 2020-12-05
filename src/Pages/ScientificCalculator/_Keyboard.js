import React, { Component } from "react";
import Key from "./_Key";
import styled from "styled-components";

export default class Keyboard extends Component {
  render() {
    // for better readability of Key components - shorter lines
    const keyClick = this.props.keyClick;
    const x = <span>&#x1D4B3;</span>;
    const inv = <sup>-1</sup>;
    const pow2 = <sup>2</sup>;
    const pow3 = <sup>3</sup>;

    return (
      <>
        <SmallGrid>
          <Key
            className="sm-button"
            Tag={[x, inv]}
            keyLog="^-1"
            math="inv"
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            Tag="&radic;"
            keyLog="&radic;("
            math="sqrt"
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            Tag={[x, pow2]}
            keyLog="^2"
            math="sqr"
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            Tag="^"
            keyLog="^"
            math="power"
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            Tag="log"
            keyLog="log("
            math="log"
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            Tag="ln"
            keyLog="ln("
            math="log"
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            keyLog="-"
            Tag="(&minus;)"
            math="sub"
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            keyLog="^3"
            Tag={[x, pow3]}
            math="power"
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            keyLog=""
            Tag="hyp"
            math="log"
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            keyLog="sin("
            Tag="sin"
            math="trig"
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            keyLog="cos("
            Tag="cos"
            math="trig"
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            keyLog="tan("
            Tag="tan"
            math="trig"
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            keyLog=""
            Tag="RCL"
            math=""
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            keyLog=""
            Tag="ENG"
            math=""
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            keyLog="("
            Tag="("
            math="prnths"
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            keyLog=")"
            Tag=")"
            math="prnths"
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            keyLog=""
            Tag=","
            math="log"
            keyClick={keyClick}
          />
          <Key
            className="sm-button"
            keyLog=""
            Tag="M+"
            math="log"
            keyClick={keyClick}
          />
        </SmallGrid>
        <Grid>
          <Key Tag="1" keyLog="1" math="number" keyClick={keyClick} />
          <Key Tag="2" keyLog="2" math="number" keyClick={keyClick} />
          <Key Tag="3" keyLog="3" math="number" keyClick={keyClick} />
          <Key
            className="orange-button"
            Tag="DEL"
            math="delete"
            keyClick={keyClick}
          />
          <Key
            className="orange-button"
            Tag="AC"
            math="clear"
            keyClick={keyClick}
          />
          <Key Tag="4" keyLog="4" math="number" keyClick={keyClick} />
          <Key Tag="5" keyLog="5" math="number" keyClick={keyClick} />
          <Key Tag="6" keyLog="6" math="number" keyClick={keyClick} />
          <Key
            Tag="&times;"
            keyLog="&times;"
            math="multiply"
            keyClick={keyClick}
          />
          <Key
            Tag="&divide;"
            keyLog="&divide;"
            math="divide"
            keyClick={keyClick}
          />
          <Key Tag="7" keyLog="7" math="number" keyClick={keyClick} />
          <Key Tag="8" keyLog="8" math="number" keyClick={keyClick} />
          <Key Tag="9" keyLog="9" math="number" keyClick={keyClick} />
          <Key Tag="+" keyLog="+" math="sum" keyClick={keyClick} />
          <Key Tag="&minus;" keyLog="-" math="subtract" keyClick={keyClick} />
          <Key Tag="0" keyLog="0" math="log" keyClick={keyClick} />
          <Key Tag="." keyLog="." math="comma" keyClick={keyClick} />
          <Key Tag="EXP" keyLog="E" math="exponent" keyClick={keyClick} />
          <Key Tag="Ans" keyLog="Ans" math="ans" keyClick={keyClick} />
          <Key Tag="=" math="equals" keyClick={keyClick} />
        </Grid>
      </>
    );
  }
}

const SmallGrid = styled.div`
  font-size: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
  margin: 1rem;
  grid-gap: 0.6rem;
`;

const Grid = styled.div`
  font-size: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
  margin: 1rem;
  grid-gap: 0.6rem;
`;
