export const HERTZ = "Hz";
export const MILLIHERTZ = "mHz";
export const KILOHERTZ = "kHz";
export const MEGAHERTZ = "MHz";
export const GIGAHERTZ = "GHz";
export const TERAHERTZ = "THz";
export const ROTATION_PER_MINUTE = "rpm";
export const DEGREE_PER_SECOND = "deg/s";
export const RADIAN_PER_SECOND = "rad/s";

export const frequency = {
  label: "Frequência",
  key: "frequency",
  options: [
    { label: "Hertz (Hz)", value: HERTZ },
    { label: "Milihertz (mHz)", value: MILLIHERTZ },
    { label: "Quilohertz (kHz)", value: KILOHERTZ },
    { label: "Megahertz (MHz)", value: MEGAHERTZ },
    { label: "Gigahertz (GHz)", value: GIGAHERTZ },
    { label: "Terahertz (THz)", value: TERAHERTZ },
    { label: "Rotação por Minuto (rpm)", value: ROTATION_PER_MINUTE },
    { label: "Grau por Segundo", value: DEGREE_PER_SECOND },
    { label: "Radiano por Segundo", value: RADIAN_PER_SECOND },
  ],
};
