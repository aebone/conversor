export const NANOSECOND = "ns";
export const MICROSECOND = "mu";
export const MILLISECOND = "ms";
export const SECOND = "s";
export const MINUTE = "min";
export const HOUR = "h";
export const DAY = "d";
export const WEEK = "week";
export const MONTH = "month";
export const YEAR = "year";

export const time = {
  label: "Tempo",
  key: "time",
  options: [
    { label: "Nanosegundo", value: NANOSECOND },
    { label: "Microsegundo", value: MICROSECOND },
    { label: "Milisegundo", value: MILLISECOND },
    { label: "Segundo", value: SECOND },
    { label: "Minuto", value: MINUTE },
    { label: "Hora", value: HOUR },
    { label: "Dia", value: DAY },
    { label: "Semana", value: WEEK },
    { label: "Mês", value: MONTH },
    { label: "Ano", value: YEAR },
  ],
};
