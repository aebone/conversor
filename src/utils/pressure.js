export const PASCAL = "Pa";
export const HECTOPASCAL = "hPa";
export const KILOPASCAL = "kPa";
export const MEGAPASCAL = "MPa";
export const BAR = "bar";
export const TORR = "torr";
export const KILOPOUND_PER_SQUARE_INCH = "ksi";
export const POUND_PER_SQUARE_INCH = "psi";

export const pressure = {
  label: "Pressão",
  key: "pressure",
  options: [
    { label: "Pascal", value: PASCAL },
    { label: "Hectopascal", value: HECTOPASCAL },
    { label: "Quilopascal", value: KILOPASCAL },
    { label: "Megapascal", value: MEGAPASCAL },
    { label: "Bar", value: BAR },
    { label: "Torr", value: TORR },
    {
      label: "Quilo-libra por polegada quadrada (ksi)",
      value: KILOPOUND_PER_SQUARE_INCH,
    },
    {
      label: "Libra por polegada quadrada (psi)",
      value: POUND_PER_SQUARE_INCH,
    },
  ],
};
