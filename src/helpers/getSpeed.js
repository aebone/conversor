import {
  FOOT_PER_SECOND,
  KILOMETER_PER_HOUR,
  KILOMETER_PER_SECOND,
  KNOT,
  METER_PER_SECOND,
  MILE_PER_HOUR,
  MILE_PER_SECOND,
  THE_SPEED_OF_LIGHT,
  THE_SPEED_OF_SOUND,
} from "../constants/shortcuts";

export const getSpeed = (from, to, value) => {
  let result;

  if (from === METER_PER_SECOND)
    if (to === METER_PER_SECOND) result = value * 1;
    else if (to === MILE_PER_HOUR) result = value * 2.236936;
    else if (to === KILOMETER_PER_HOUR) result = value * 3.6;
    else if (to === FOOT_PER_SECOND) result = value * 3.28084;
    else if (to === KNOT) result = value * 1.943845;
    else if (to === KILOMETER_PER_SECOND) result = value * 0.001;
    else if (to === MILE_PER_SECOND) result = value * 0.0006213712;
    else if (to === THE_SPEED_OF_LIGHT) result = value * 0.000000003336;
    else if (to === THE_SPEED_OF_SOUND) result = value * 0.0029154519;

  if (from === MILE_PER_HOUR)
    if (to === METER_PER_SECOND) result = value * 0.4470400584;
    else if (to === MILE_PER_HOUR) result = value * 1;
    else if (to === KILOMETER_PER_HOUR) result = value * 1.6093442101;
    else if (to === FOOT_PER_SECOND) result = value * 1.4666669051;
    else if (to === KNOT) result = value * 0.8689765823;
    else if (to === KILOMETER_PER_SECOND) result = value * 0.0004470401;
    else if (to === MILE_PER_SECOND) result = value * 0.0002777778;
    else if (to === THE_SPEED_OF_LIGHT) result = value * 0.000000001491;
    else if (to === THE_SPEED_OF_SOUND) result = value * 0.0013033238;

  if (from === KILOMETER_PER_HOUR)
    if (to === METER_PER_SECOND) result = value * 0.2777777778;
    else if (to === MILE_PER_HOUR) result = value * 0.6213711111;
    else if (to === KILOMETER_PER_HOUR) result = value * 1;
    else if (to === FOOT_PER_SECOND) result = value * 0.9113444444;
    else if (to === KNOT) result = value * 0.5399569444;
    else if (to === KILOMETER_PER_SECOND) result = value * 0.0002777778;
    else if (to === MILE_PER_SECOND) result = value * 0.0001726031;
    else if (to === THE_SPEED_OF_LIGHT) result = value * 0.0000000009266;
    else if (to === THE_SPEED_OF_SOUND) result = value * 0.000809848;

  if (from === FOOT_PER_SECOND)
    if (to === METER_PER_SECOND) result = value * 0.3047999902;
    else if (to === MILE_PER_HOUR) result = value * 0.681818071;
    else if (to === KILOMETER_PER_HOUR) result = value * 1.0972799649;
    else if (to === FOOT_PER_SECOND) result = value * 1;
    else if (to === KNOT) result = value * 0.592483937;
    else if (to === KILOMETER_PER_SECOND) result = value * 0.0003048;
    else if (to === MILE_PER_SECOND) result = value * 0.0001893939;
    else if (to === THE_SPEED_OF_LIGHT) result = value * 0.000000001017;
    else if (to === THE_SPEED_OF_SOUND) result = value * 0.0008886297;

  if (from === KNOT)
    if (to === METER_PER_SECOND) result = value * 0.5144443101;
    else if (to === MILE_PER_HOUR) result = value * 1.1507789973;
    else if (to === KILOMETER_PER_HOUR) result = value * 1.8519995164;
    else if (to === FOOT_PER_SECOND) result = value * 1.6878094704;
    else if (to === KNOT) result = value * 1;
    else if (to === KILOMETER_PER_SECOND) result = value * 0.0005144443;
    else if (to === MILE_PER_SECOND) result = value * 0.0003196609;
    else if (to === THE_SPEED_OF_LIGHT) result = value * 0.000000001716;
    else if (to === THE_SPEED_OF_SOUND) result = value * 0.0014998376;

  if (from === KILOMETER_PER_SECOND)
    if (to === METER_PER_SECOND) result = value * 1000;
    else if (to === MILE_PER_HOUR) result = value * 2236.936;
    else if (to === KILOMETER_PER_HOUR) result = value * 3600;
    else if (to === FOOT_PER_SECOND) result = value * 3280.84;
    else if (to === KNOT) result = value * 1943.845;
    else if (to === KILOMETER_PER_SECOND) result = value * 1;
    else if (to === MILE_PER_SECOND) result = value * 0.6213712;
    else if (to === THE_SPEED_OF_LIGHT) result = value * 0.0000033356;
    else if (to === THE_SPEED_OF_SOUND) result = value * 2.915451895;

  if (from === MILE_PER_SECOND)
    if (to === METER_PER_SECOND) result = value * 1609;
    else if (to === MILE_PER_HOUR) result = value * 3600;
    else if (to === KILOMETER_PER_HOUR) result = value * 5794;
    else if (to === FOOT_PER_SECOND) result = value * 5280;
    else if (to === KNOT) result = value * 3128;
    else if (to === KILOMETER_PER_SECOND) result = value * 1.609;
    else if (to === MILE_PER_SECOND) result = value * 1;
    else if (to === THE_SPEED_OF_LIGHT) result = value * 0.000005368;
    else if (to === THE_SPEED_OF_SOUND) result = value * 4.691964956;

  if (from === THE_SPEED_OF_LIGHT)
    if (to === METER_PER_SECOND) result = value * 299792458;
    else if (to === MILE_PER_HOUR) result = value * 670616629;
    else if (to === KILOMETER_PER_HOUR) result = value * 1079000000;
    else if (to === FOOT_PER_SECOND) result = value * 983600000;
    else if (to === KNOT) result = value * 582700000;
    else if (to === KILOMETER_PER_SECOND) result = value * 299792.458;
    else if (to === MILE_PER_SECOND) result = value * 186282.397;
    else if (to === THE_SPEED_OF_LIGHT) result = value * 1;
    else if (to === THE_SPEED_OF_SOUND) result = value * 881742.52352941;

  if (from === THE_SPEED_OF_SOUND)
    if (to === METER_PER_SECOND) result = value * 343;
    else if (to === MILE_PER_HOUR) result = value * 767.269048;
    else if (to === KILOMETER_PER_HOUR) result = value * 1234.8;
    else if (to === FOOT_PER_SECOND) result = value * 1125.32812;
    else if (to === KNOT) result = value * 666.738835;
    else if (to === KILOMETER_PER_SECOND) result = value * 0.343;
    else if (to === MILE_PER_SECOND) result = value * 0.2131303216;
    else if (to === THE_SPEED_OF_LIGHT) result = value * 0.0000011441;
    else if (to === THE_SPEED_OF_SOUND) result = value * 1;

  return result;
};
