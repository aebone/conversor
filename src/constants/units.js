import {
  CELSIUS,
  FAHRENHEIT,
  FOOT_PER_SECOND,
  GRAM,
  KELVIN,
  KILOGRAM,
  KILOMETER_PER_HOUR,
  KILOMETER_PER_SECOND,
  KNOT,
  METER_PER_SECOND,
  MILE_PER_HOUR,
  MILE_PER_SECOND,
  MILLIGRAM,
  NEWTON,
  OUNCE,
  POUND,
  RANKINE,
  REAUMUR,
  ROMER,
  THE_SPEED_OF_LIGHT,
  THE_SPEED_OF_SOUND,
  TONNE,
} from "./shortcuts";

export const WEIGHT = "weight";
export const TEMPERATURE = "temperature";
export const SPEED = "speed";

export const units = [
  {
    id: WEIGHT,
    name: "Peso",
    options: [
      { label: "Libra (lb)", value: POUND },
      { label: "Onça (oz)", value: OUNCE },
      { label: "Miligrama (mg)", value: MILLIGRAM },
      { label: "Grama (g)", value: GRAM },
      { label: "Quilograma (kg)", value: KILOGRAM },
      { label: "Tonelada (t)", value: TONNE },
    ],
  },
  {
    id: TEMPERATURE,
    name: "Temperatura",
    options: [
      { label: "Celsius (ºC)", value: CELSIUS },
      { label: "Fahrenheit (ºF)", value: FAHRENHEIT },
      { label: "Kelvin (K)", value: KELVIN },
      { label: "Rankine (ºR)", value: RANKINE },
      { label: "Newton (ºN)", value: NEWTON },
      { label: "Réaumur (ºRé)", value: REAUMUR },
      { label: "Rømer (ºRø)", value: ROMER },
    ],
  },
  {
    id: SPEED,
    name: "Velocidade",
    options: [
      { label: "Metro por Segundo (m/s)", value: METER_PER_SECOND },
      { label: "Milha por Hora (mph)", value: MILE_PER_HOUR },
      { label: "Quilômetro por Hora (km/h)", value: KILOMETER_PER_HOUR },
      { label: "Pé por Segundo (ft/s)", value: FOOT_PER_SECOND },
      { label: "Nó (knot)", value: KNOT },
      { label: "Quilômetro por Segundo (km/s)", value: KILOMETER_PER_SECOND },
      { label: "Milha por Segundo (mps)", value: MILE_PER_SECOND },
      { label: "Velocidade da Luz (c)", value: THE_SPEED_OF_LIGHT },
      { label: "Velocidade do Som (mach)", value: THE_SPEED_OF_SOUND },
    ],
  },
];
