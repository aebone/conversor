import React from "react";
import PropTypes from "prop-types";
import timezones from "../../utils/timezones";
import styled from "styled-components";

export default class TimezonePicker extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    offset: PropTypes.oneOf(["GMT", "UTC"]),
    onChange: PropTypes.func.isRequired,
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
    return `(${offset}${zone.offset}) ${zone.label}`;
  }

  timezones() {
    if (!this.state.query.trim()) return timezones;

    return timezones.filter((zone) =>
      zone.label
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(
          this.state.query
            .toLowerCase()
            .replace(/\s+/g, "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        )
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
      <TimezonePickerWrapper>
        <Input
          id={"timezone-picker"}
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
  width: 60%;
  margin: auto;
`;

const List = styled.ul`
  position: absolute;
  max-height: 20rem;
  overflow-y: scroll;
  margin-top: -1px;
  display: none;
  width: 90%;
  background: #fff;
  border: 1px solid #c6c6c6;
  &.open {
    display: block;
  }
`;

const Button = styled.button`
  width: 100%;
  border: 0;
  color: #444;
  cursor: pointer;
  display: block;
  text-align: left;
  height: 3rem;
  background: #fff;
  &:focus,
  &:hover {
    background: #f0f0f0;
  }
`;

const Input = styled.input`
  height: 3rem;
  width: 100%;
  font-size: 1rem;
  padding: 0 0.5rem;
`;
