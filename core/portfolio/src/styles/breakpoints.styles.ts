export const screenSizes = {
  // Landscape mobile
  small: 480,
  // Portait tablets
  medium: 768,
  // Landscape tablets
  large: 992,
  // Desktop
  xlarge: 1200,
};

const breakpoints: { [key: string]: string } = {};

Object.entries(screenSizes).forEach(([key, value]) => {
  breakpoints[key] = `only screen and (min-width: ${value}px)`;
});

export default breakpoints;
