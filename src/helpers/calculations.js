export const getWeight = (from, to, value) => {
  let result;
  if (from === "lb") {
    if (to === "lb") result = value * 1;
    else if (to === "kg") result = value * 0.45359237;
    else if (to === "oz") result = value * 14.583344;
    else if (to === "mg") result = value * 453592.7037;
    else if (to === "g") result = value * 453.5927;
    else if (to === "t") result = value * 0.0005;
  }
  return result;
};
