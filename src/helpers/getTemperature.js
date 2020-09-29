import {
  CELSIUS,
  FAHRENHEIT,
  KELVIN,
  NEWTON,
  RANKINE,
  REAUMUR,
  ROMER,
} from "../constants/shortcuts";

export const getTemperature = (from, to, value) => {
  let result;

  if (from === CELSIUS)
    if (to === FAHRENHEIT) result = value * 1.8 + 32;
    else if (to === KELVIN) result = 273.15 + value;
    else if (to === RANKINE) result = value * 1.8 + 491.67;
    else if (to === NEWTON) result = value * 0.33;
    else if (to === CELSIUS) result = value * 1;
    else if (to === REAUMUR) result = value * 0.8;
    else if (to === ROMER) result = value * (21 / 40) + 7.5;

  if (from === FAHRENHEIT)
    if (to === FAHRENHEIT) result = value * 1;
    else if (to === KELVIN) result = value + 459.67 / 1.8;
    else if (to === RANKINE) result = value + 459.67;
    else if (to === NEWTON) result = (value - 32) * (11 / 60);
    else if (to === CELSIUS) result = (value - 32) / 1.8;
    else if (to === REAUMUR) result = (value - 32) / 2.25;
    else if (to === ROMER) result = (value - 32) * (7 / 24) + 7.5;

  if (from === KELVIN)
    if (to === FAHRENHEIT) result = value * 1.8 - 459.67;
    else if (to === KELVIN) result = value * 1;
    else if (to === RANKINE) result = value * 1.8;
    else if (to === NEWTON) result = ((value - 273.15) * 33) / 100;
    else if (to === CELSIUS) result = value - 273.15;
    else if (to === REAUMUR) result = (value - 273.15) * 0.8;
    else if (to === ROMER) result = (value - 273.15) * (21 / 40) + 7.5;

  if (from === RANKINE)
    if (to === FAHRENHEIT) result = value - 459.67;
    else if (to === KELVIN) result = value / 1.8;
    else if (to === RANKINE) result = value * 1;
    else if (to === NEWTON) result = (value - 491.67) * (11 / 60);
    else if (to === CELSIUS) result = ((value - 491.67) * 5) / 9;
    else if (to === REAUMUR) result = ((value - 491.67) * 4) / 9;
    else if (to === ROMER) result = (value - 491.67) * (7 / 24) + 7.5;

  if (from === NEWTON)
    if (to === FAHRENHEIT) result = (value * 60) / 11 + 32;
    else if (to === KELVIN) result = (value * 100) / 33 + 273.15;
    else if (to === RANKINE) result = (value * 60) / 11 + 491.67;
    else if (to === NEWTON) result = value * 1;
    else if (to === CELSIUS) result = (value * 100) / 33;
    else if (to === REAUMUR) result = (value * 80) / 33;
    else if (to === ROMER) result = (value * 35) / 22 + 7.5;

  if (from === REAUMUR)
    if (to === FAHRENHEIT) result = value * 2.25 + 32;
    else if (to === KELVIN) result = value / 0.8 + 273.15;
    else if (to === RANKINE) result = value * 2.25 + 491.67;
    else if (to === NEWTON) result = (value * 33) / 80;
    else if (to === CELSIUS) result = value / 0.8;
    else if (to === REAUMUR) result = value * 1;
    else if (to === ROMER) result = (value * 21) / 32 + 7.5;

  if (from === ROMER)
    if (to === FAHRENHEIT) result = ((value - 7.5) * 24) / 7 + 32;
    else if (to === KELVIN) result = ((value - 7.5) * 40) / 21 + 273.15;
    else if (to === RANKINE) result = ((value - 7.5) * 24) / 7 + 491.67;
    else if (to === NEWTON) result = ((value - 7.5) * 22) / 35;
    else if (to === CELSIUS) result = ((value - 7.5) * 40) / 21;
    else if (to === REAUMUR) result = ((value - 7.5) * 32) / 21;
    else if (to === ROMER) result = value * 1;

  return result;
};
