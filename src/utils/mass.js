export const MICROGRAM = "mcg";
export const MILLIGRAM = "mg";
export const GRAM = "g";
export const KILOGRAM = "kg";
export const OUNCE = "oz";
export const POUND = "lb";
export const METRIC_TONNE = "mt";
export const TON = "t";

export const mass = {
  label: "Massa",
  key: "mass",
  options: [
    { label: "Micrograma (mcg)", value: MICROGRAM },
    { label: "Miligrama (mg)", value: MILLIGRAM },
    { label: "Grama (g)", value: GRAM },
    { label: "Quilograma (kg)", value: KILOGRAM },
    { label: "Onça (oz)", value: OUNCE },
    { label: "Libra (lb)", value: POUND },
    { label: "Tonelada", value: METRIC_TONNE },
    { label: "Tonelada Curta", value: TON },
  ],
};
