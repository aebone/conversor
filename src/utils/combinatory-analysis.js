export const SIMPLE_ARRANGEMENT = "simple-arrangement";
export const ARRANGEMENT_WITH_REPETITION = "arrangement-with-repetition";
export const PERMUTATION = "permutation";
export const SIMPLE_COMBINATION = "simple-combination";
export const COMBINATION_WITH_REPETITION = "combination-with-repetition";

const factorial = (n) => {
  let fact = 1;
  for (let i = n; i > 1; i--) {
    fact = fact * i;
  }
  return fact;
};

export const simpleArrangement = (numberOfElements, numberOfGroups) => {
  return (
    factorial(numberOfElements) / factorial(numberOfElements - numberOfGroups)
  );
};

export const arrangementWithRepetition = (numberOfElements, numberOfGroups) => {
  return Math.pow(numberOfElements, numberOfGroups);
};

export const permutation = (numberOfElements) => {
  return factorial(numberOfElements);
};

export const simpleCombination = (numberOfElements, numberOfGroups) => {
  console.log("numberOfElements", numberOfElements);
  console.log("numberOfGroups", numberOfGroups);
  return (
    factorial(numberOfElements) /
    (factorial(numberOfElements - numberOfGroups) * factorial(numberOfGroups))
  );
};

export const combinationWithRepetition = (numberOfElements, numberOfGroups) => {
  console.log("numberOfElements", numberOfElements);
  console.log("numberOfGroups", numberOfGroups);
  return simpleCombination(
    parseInt(numberOfElements) + parseInt(numberOfGroups) - 1,
    numberOfGroups
  );
};
