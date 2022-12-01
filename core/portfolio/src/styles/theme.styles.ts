import color from "./colors.styles";
import images from "./images.styles";

export type ThemeType = typeof DefaultThemeStyles;

const DefaultThemeStyles = {
  color: color.panda,
  images: images.panda,
};

export const PandaThemeStyles = {
  color: color.panda,
  images: images.panda,
};

export const RhubarbThemeStyles = {
  color: color.rhubarb,
  images: images.rhubarb,
};

export const BumblebeeThemeStyles = {
  color: color.bumblebee,
  images: images.bumblebee,
};

export const PumpkinThemeStyles = {
  color: color.pumpkin,
  images: images.pumpkin,
};

export default DefaultThemeStyles;
