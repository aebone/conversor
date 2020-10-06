const MILLIMETER = "mm";
const CENTIMETER = "cm";
const METER = "m";
const KILOMETER = "km";
const INCH = "in";
const YARD = "yd";
const FOOT_US = "ft-us";
const FOOT = "ft";
const MILE = "mi";

export const length = {
  label: "Comprimento",
  key: "length",
  options: [
    { label: "Milímetro (mm)", value: MILLIMETER },
    { label: "Centímetro (cm)", value: CENTIMETER },
    { label: "Metro (m)", value: METER },
    { label: "Quilômetro (km)", value: KILOMETER },
    { label: "Polegada (in)", value: INCH },
    { label: "Jarda (yd)", value: YARD },
    { label: "Pés - US (ft-us)", value: FOOT_US },
    { label: "Pés (ft)", value: FOOT },
    { label: "Milha (mi)", value: MILE },
  ],
};
