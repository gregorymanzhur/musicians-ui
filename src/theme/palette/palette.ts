import { lighten, darken } from "./utils";
import { MainColors, CrimsonColors, RedColors, BrownColors, GrayColors, Palette } from "./types";

export const mainColorsBase: MainColors = {
  crimson: '#D50A5C',
  brown: '#6F2232',
  red: '#C3073F',
  gray: '#232326',
};

const crimsonColors: CrimsonColors = {
  crimson: mainColorsBase.crimson,
  crimsonDarken10: darken(mainColorsBase.crimson, 10),
  crimsonDarken20: darken(mainColorsBase.crimson, 20),
  crimsonDarken30: darken(mainColorsBase.crimson, 30),
  crimsonLighten10: lighten(mainColorsBase.crimson, 10),
  crimsonLighten20: lighten(mainColorsBase.crimson, 20),
  crimsonLighten30: lighten(mainColorsBase.crimson, 30),
  crimsonLighten40: lighten(mainColorsBase.crimson, 40),
  crimsonLighten50: lighten(mainColorsBase.crimson, 50),
  crimsonLighten60: lighten(mainColorsBase.crimson, 60),
  crimsonLighten70: lighten(mainColorsBase.crimson, 70),
  crimsonLighten80: lighten(mainColorsBase.crimson, 80),
  crimsonLighten90: lighten(mainColorsBase.crimson, 90),
  crimsonLighten100: lighten(mainColorsBase.crimson, 100),
};

const grayColors: GrayColors = {
  gray: mainColorsBase.gray,
  grayDarken10: darken(mainColorsBase.gray, 10),
  grayDarken20: darken(mainColorsBase.gray, 20),
  grayDarken30: darken(mainColorsBase.gray, 30),
  grayLighten10: lighten(mainColorsBase.gray, 10),
  grayLighten20: lighten(mainColorsBase.gray, 20),
  grayLighten30: lighten(mainColorsBase.gray, 30),
  grayLighten40: lighten(mainColorsBase.gray, 40),
  grayLighten50: lighten(mainColorsBase.gray, 50),
  grayLighten60: lighten(mainColorsBase.gray, 60),
  grayLighten70: lighten(mainColorsBase.gray, 70),
  grayLighten80: lighten(mainColorsBase.gray, 80),
  grayLighten90: lighten(mainColorsBase.gray, 90),
  grayLighten100: lighten(mainColorsBase.gray, 100),
};

const brownColors: BrownColors = {
  brown: mainColorsBase.brown,
  brownDarken10: darken(mainColorsBase.brown, 10),
  brownDarken20: darken(mainColorsBase.brown, 20),
  brownDarken30: darken(mainColorsBase.brown, 30),
  brownLighten10: lighten(mainColorsBase.brown, 10),
  brownLighten20: lighten(mainColorsBase.brown, 20),
  brownLighten30: lighten(mainColorsBase.brown, 30),
  brownLighten40: lighten(mainColorsBase.brown, 40),
  brownLighten50: lighten(mainColorsBase.brown, 50),
  brownLighten60: lighten(mainColorsBase.brown, 60),
  brownLighten70: lighten(mainColorsBase.brown, 70),
  brownLighten80: lighten(mainColorsBase.brown, 80),
  brownLighten90: lighten(mainColorsBase.brown, 90),
  brownLighten100: lighten(mainColorsBase.brown, 100),
};

const redColors: RedColors = {
  red: mainColorsBase.red,
  redDarken10: darken(mainColorsBase.red, 10),
  redDarken20: darken(mainColorsBase.red, 20),
  redDarken30: darken(mainColorsBase.red, 30),
  redLighten10: lighten(mainColorsBase.red, 10),
  redLighten20: lighten(mainColorsBase.red, 20),
  redLighten30: lighten(mainColorsBase.red, 30),
  redLighten40: lighten(mainColorsBase.red, 40),
  redLighten50: lighten(mainColorsBase.red, 50),
  redLighten60: lighten(mainColorsBase.red, 60),
  redLighten70: lighten(mainColorsBase.red, 70),
  redLighten80: lighten(mainColorsBase.red, 80),
  redLighten90: lighten(mainColorsBase.red, 90),
  redLighten100: lighten(mainColorsBase.red, 100),
};

export const paletteBase: Palette = {
  ...crimsonColors,
  ...grayColors,
  ...brownColors,
  ...redColors,
};
