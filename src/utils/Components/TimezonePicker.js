import React from "react";
import PropTypes from "prop-types";
import timezones from "../timezones";
import styled from "styled-components";

export default class TimezonePicker extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    offset: PropTypes.oneOf(["GMT", "UTC"]),
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    inputProps: PropTypes.shape({
      onBlur: PropTypes.func,
      onFocus: PropTypes.func,
      onChange: PropTypes.func,
      onKeyDown: PropTypes.func,
    }),
  };

  static defaultProps = {
    value: "",
    offset: "GMT",
    className: "",
    style: {},
    inputProps: {},
  };

  state = {
    focus: null,
    query: "",
    currentZone: this.props.value
      ? timezones.find((zone) => zone.name === this.props.value)
      : null,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.value !== (state.currentZone ? state.currentZone.name : "")) {
      return {
        currentZone: timezones.find((zone) => zone.name === props.value),
      };
    }
    return null;
  }

  stringifyZone(zone, offset) {
    const ensure2Digits = (num) => (num > 9 ? `${num}` : `0${num}`);

    return `(${offset}${zone.offset}) ${zone.label}`;
  }

  timezones() {
    if (!this.state.query.trim()) return timezones;

    return timezones.filter((zone) =>
      zone.label
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(this.state.query.toLowerCase().replace(/\s+/g, ""))
    );
  }

  handleFocus = (e) => {
    this.setState({ focus: 0 });

    if (this.props.inputProps.onFocus) {
      this.props.inputProps.onFocus(e);
    }
  };

  handleBlur = (e) => {
    this.setState({ focus: null, query: "" });

    if (this.props.inputProps.onBlur) {
      this.props.inputProps.onBlur(e);
    }
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value, focus: 0 });

    if (this.props.inputProps.onChange) {
      this.props.inputProps.onChange(e);
    }
  };

  handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.stopPropagation();
      e.preventDefault();

      const ulElement = e.currentTarget.parentElement.querySelector("ul");
      const zones = this.timezones();
      this.setState((state) => {
        const focus = state.focus === zones.length - 1 ? 0 : state.focus + 1;

        this.scrollToElement(ulElement.children[focus]);

        return { focus };
      });
    } else if (e.key === "ArrowUp") {
      e.stopPropagation();
      e.preventDefault();

      const ulElement = e.currentTarget.parentElement.querySelector("ul");
      const zones = this.timezones();
      this.setState((state) => {
        const focus = state.focus === 0 ? zones.length - 1 : state.focus - 1;

        this.scrollToElement(ulElement.children[focus]);

        return { focus };
      });
    } else if (e.key === "Escape" && this.input) {
      e.stopPropagation();
      e.preventDefault();

      this.input.blur();
    } else if (e.key === "Enter") {
      e.stopPropagation();
      e.preventDefault();
      e.currentTarget.blur();

      const zones = this.timezones();
      if (zones[this.state.focus]) {
        this.handleChangeZone(zones[this.state.focus]);
      }
    }

    if (this.props.inputProps.onKeyDown) {
      this.props.inputProps.onKeyDown(e);
    }
  };

  handleHoverItem = (index) => {
    this.setState({ focus: index });
  };

  handleChangeZone = (zone) => {
    this.props.onChange(zone);
  };

  scrollToElement = (element) => {
    const ulElement = element.parentElement;

    const topDifference = element.offsetTop - ulElement.scrollTop;
    const bottomDifference =
      ulElement.clientHeight +
      ulElement.scrollTop -
      (element.offsetTop + element.offsetHeight);

    if (topDifference < 0) {
      // Scroll top
      ulElement.scrollTop = element.offsetTop;
    }

    if (bottomDifference < 0) {
      // Scroll bottom
      ulElement.scrollTop -= bottomDifference;
    }
  };

  render() {
    const { offset, inputProps } = this.props;
    const { currentZone, focus, query } = this.state;

    const open = focus !== null;

    return (
      <TimezonePickerWrapper
        className={this.props.className}
        style={this.props.style}
      >
        <Input
          type="text"
          autoComplete="off"
          {...inputProps}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={
            currentZone && !open
              ? this.stringifyZone(currentZone, offset)
              : query
          }
          ref={(input) => {
            this.input = input;
          }}
        />

        <List className={open ? "open" : ""}>
          {this.timezones().map((zone, index) => (
            <li key={zone.name}>
              <Button
                title={zone.label}
                onMouseDown={() => this.handleChangeZone(zone)}
                onMouseOver={() => this.handleHoverItem(index)}
                onFocus={() => this.handleHoverItem(index)}
                className={focus === index ? "focus" : ""}
              >
                {this.stringifyZone(zone, offset)}
              </Button>
            </li>
          ))}
        </List>
      </TimezonePickerWrapper>
    );
  }
}

const TimezonePickerWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0;
`;

const List = styled.ul`
  width: 100%;
  background: blanchedalmond;
  position: absolute;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #e6ebec;
  margin-top: -1px;
  display: none;

  &.open {
    display: block;
  }
`;

const Button = styled.button`
  color: #444;
  padding: 5px 12px;
  cursor: pointer;
  outline: none;
  display: block;
  border: 0;
  width: 100%;
  text-align: left;
  border-radius: 0;
  font: inherit;
  &.focus {
    background: #f0f0f0;
  }
`;
