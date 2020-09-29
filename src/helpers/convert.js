import { SPEED, TEMPERATURE, WEIGHT } from "../constants/units";
import { getWeight } from "./getWeight";
import { getTemperature } from "./getTemperature";
import { getSpeed } from "./getSpeed";

export const convert = (unit, from, to, value) => {
  if (unit === WEIGHT) return getWeight(from, to, value);
  if (unit === TEMPERATURE) return getTemperature(from, to, value);
  if (unit === SPEED) return getSpeed(from, to, value);
};
