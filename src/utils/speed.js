const METER_PER_SECOND = "m/s";
const KILOMETER_PER_HOUR = "km/h";
const MILE_PER_HOUR = "m/h";
const KNOT = "knot";
const FOOT_PER_SECOND = "ft/s";

export const speed = {
  label: "Velocidade",
  key: "speed",
  options: [
    { label: "Metro por Segundo (m/s)", value: METER_PER_SECOND },
    { label: "Quilômetro por Hora (km/h)", value: KILOMETER_PER_HOUR },
    { label: "Milha por Hora (m/h)", value: MILE_PER_HOUR },
    { label: "Nó (knot)", value: KNOT },
    { label: "Pé por Segundo (ft/s)", value: FOOT_PER_SECOND },
  ],
};
