import { rgba } from "polished";

const primary = {
  black: "#000000",
  white: "#FFFFFF",
};
const grey = {
  charcoal: "#1E2323",
  concrete: "#F2F2F2",
  lead: "#9D9D9D",
  lunar: "#595959",
  mercury: "#E0E0E0",
};

const opacity = {
  black8: rgba(primary.black, 0.08),
  black12: rgba(primary.black, 0.12),
  black32: rgba(primary.black, 0.32),
  black64: rgba(primary.black, 0.64),
  black72: rgba(primary.black, 0.72),
  black80: rgba(primary.black, 0.8),
};

const rhubarb = {
  rhubarbPink: "#FC7569",
  rhubarbYellow: "#F8A12E",
  rhubarbPurple: "#9B4997",
};

const bumblebee = {
  bumblebeeYellow1: "#FFBD7B",
  bumblebeeYellow2: "#FFA350",
  bumblebeeYellow3: "#EDD971",
};

const pumpkin = {
  pumpkinGreen: "#016646",
  pumpkinOrange: "#E85C1F",
  pumpkinBrown: "#4F2C1D",
};

const color = {
  primary,
  opacity,
  grey,
  rhubarb,
  bumblebee,
  pumpkin,
};

export default color;
