export const WATT_HOUR = "Wh";
export const MILLIWATT_HOUR = "mWh";
export const KILOWATT_HOUR = "kWh";
export const MEGAWATT_HOUR = "MWh";
export const GIGAWATT_HOUR = "GWh";
export const JOULE = "J";
export const KILOJOULE = "kJ";

export const energy = {
  label: "Energia",
  key: "energy",
  options: [
    { label: "Watt-hora (Wh)", value: WATT_HOUR },
    { label: "Miliwatt-hora (mWh)", value: MILLIWATT_HOUR },
    { label: "Quilowatt-hora (kWh)", value: KILOWATT_HOUR },
    { label: "Megawatt-hora (MWh)", value: MEGAWATT_HOUR },
    { label: "Gigawatt-hora (GWh)", value: GIGAWATT_HOUR },
    { label: "Joule (J)", value: JOULE },
    { label: "Quilojoule (kJ)", value: KILOJOULE },
  ],
};
