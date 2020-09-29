import {
  GRAM,
  KILOGRAM,
  MILLIGRAM,
  OUNCE,
  POUND,
  TONNE,
} from "../constants/shortcuts";

export const getWeight = (from, to, value) => {
  let result;

  if (from === POUND)
    if (to === POUND) result = value * 1;
    else if (to === KILOGRAM) result = value * 0.45359237;
    else if (to === OUNCE) result = value * 14.583344;
    else if (to === MILLIGRAM) result = value * 453592.7037;
    else if (to === GRAM) result = value * 453.5927;
    else if (to === TONNE) result = value * 0.0005;

  if (from === KILOGRAM)
    if (to === POUND) result = value * 2.2046;
    else if (to === KILOGRAM) result = value * 1;
    else if (to === OUNCE) result = value * 35.2739;
    else if (to === MILLIGRAM) result = value * 1000000;
    else if (to === GRAM) result = value * 1000;
    else if (to === TONNE) result = value * 0.001;

  if (from === OUNCE)
    if (to === POUND) result = value * 0.0686;
    else if (to === KILOGRAM) result = value * 0.0311;
    else if (to === OUNCE) result = value * 1;
    else if (to === MILLIGRAM) result = value * 31103.476;
    else if (to === GRAM) result = value * 31.103476;
    else if (to === TONNE) result = value * 0.0000311;

  if (from === MILLIGRAM)
    if (to === POUND) result = value * 0.0000022046;
    else if (to === KILOGRAM) result = value * 0.000001;
    else if (to === OUNCE) result = value * 0.0000352739;
    else if (to === MILLIGRAM) result = value * 1;
    else if (to === GRAM) result = value * 0.001;
    else if (to === TONNE) result = value * 0.000000001;

  if (from === GRAM)
    if (to === POUND) result = value * 0.002204621;
    else if (to === KILOGRAM) result = value * 0.001;
    else if (to === OUNCE) result = value * 0.0352739;
    else if (to === MILLIGRAM) result = value * 1000;
    else if (to === GRAM) result = value * 1;
    else if (to === TONNE) result = value * 0.000001;

  if (from === TONNE)
    if (to === POUND) result = value * 2204.621;
    else if (to === KILOGRAM) result = value * 1000;
    else if (to === OUNCE) result = value * 35273.94;
    else if (to === MILLIGRAM) result = value * 1000000000;
    else if (to === GRAM) result = value * 1000000;
    else if (to === TONNE) result = value * 1;

  return result;
};
