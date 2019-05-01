import Color from "color";

export const lighten = (color: string, ratio: number): string => {
  const colorParsed = Color(color);
  const lightness = colorParsed.lightness();
  const step = (100 - lightness) / 100;

  return Color(color).lightness(lightness + ratio * step).hex();
};

export const darken = (color: string, ratio: number): string => {
  const colorParsed = Color(color);
  const lightness = colorParsed.lightness();
  const step = lightness / 100;

  return Color(color).lightness(lightness - ratio * step).hex();
};
