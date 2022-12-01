const colors = {
  black: "#000000",
  white: "#FFFFFF",
  grey: "#595959",
  rhubarbPink: "#FC7569",
  rhubarbYellow: "#F8A12E",
  rhubarbPurple: "#9B4997",
  bumblebeeYellow1: "#FFBD7B",
  bumblebeeYellow2: "#FFA350",
  bumblebeeYellow3: "#EDD971",
  pumpkinGreen: "#016646",
  pumpkinOrange: "#E85C1F",
  pumpkinBrown: "#4F2C1D",
};

const panda = {
  primary: colors.black,
  secondary: colors.white,
  tertiary: colors.black,
  quarternary: colors.white,
  text: {
    link: {
      nav: {
        default: colors.black,
        hover: colors.white,
        active: colors.white,
      },
      list: {
        default: colors.black,
        hover: colors.white,
      },
    },
  },
  border: {
    link: {
      nav: {
        default: colors.black,
        active: colors.black,
        hover: colors.black,
      },
      list: {
        default: colors.black,
        hover: colors.black,
      },
    },
  },
  background_color: {
    link: {
      nav: {
        default: colors.white,
        hover: colors.black,
        active: colors.black,
      },
      list: {
        default: colors.white,
        hover: colors.black,
      },
    },
    body: {
      top: colors.white,
      bottom: colors.white,
    },
  },
};

const rhubarb = {
  primary: colors.white,
  secondary: colors.rhubarbPink,
  tertiary: colors.rhubarbYellow,
  quarternary: colors.rhubarbPurple,
  text: {
    link: {
      nav: {
        default: colors.white,
        hover: colors.rhubarbYellow,
        active: colors.white,
      },
      list: {
        default: colors.white,
        hover: colors.rhubarbPurple,
      },
    },
  },
  border: {
    link: {
      nav: {
        default: colors.rhubarbYellow,
        active: colors.rhubarbPurple,
        hover: colors.white,
      },
      list: {
        default: colors.rhubarbPurple,
        hover: colors.rhubarbPurple,
      },
    },
  },
  background_color: {
    link: {
      nav: {
        default: colors.rhubarbYellow,
        hover: colors.white,
        active: colors.rhubarbPurple,
      },
      list: {
        default: colors.rhubarbPurple,
        hover: colors.white,
      },
    },
    body: {
      top: colors.rhubarbPink,
      bottom: colors.rhubarbYellow,
    },
  },
};

const bumblebee = {
  primary: colors.black,
  secondary: colors.bumblebeeYellow1,
  tertiary: colors.bumblebeeYellow2,
  quarternary: colors.bumblebeeYellow3,
  text: {
    link: {
      nav: {
        default: colors.black,
        hover: colors.black,
        active: colors.black,
      },
      list: {
        default: colors.black,
        hover: colors.black,
      },
    },
  },
  border: {
    link: {
      nav: {
        default: colors.black,
        active: colors.black,
        hover: colors.black,
      },
      list: {
        default: colors.black,
        hover: colors.black,
      },
    },
  },
  background_color: {
    link: {
      nav: {
        default: colors.bumblebeeYellow2,
        hover: colors.bumblebeeYellow3,
        active: colors.bumblebeeYellow3,
      },
      list: {
        default: colors.bumblebeeYellow2,
        hover: colors.bumblebeeYellow3,
      },
    },
    body: {
      top: colors.bumblebeeYellow1,
      bottom: colors.bumblebeeYellow2,
    },
  },
};

const pumpkin = {
  primary: colors.white,
  secondary: colors.pumpkinGreen,
  tertiary: colors.pumpkinOrange,
  quarternary: colors.pumpkinBrown,
  text: {
    link: {
      nav: {
        default: colors.white,
        hover: colors.pumpkinOrange,
        active: colors.white,
      },
      list: {
        default: colors.white,
        hover: colors.pumpkinGreen,
      },
    },
  },
  border: {
    link: {
      nav: {
        default: colors.pumpkinOrange,
        active: colors.pumpkinBrown,
        hover: colors.white,
      },
      list: {
        default: colors.pumpkinBrown,
        hover: colors.pumpkinBrown,
      },
    },
  },
  background_color: {
    link: {
      nav: {
        default: colors.pumpkinOrange,
        hover: colors.white,
        active: colors.pumpkinBrown,
      },
      list: {
        default: colors.pumpkinBrown,
        hover: colors.white,
      },
    },
    body: {
      top: colors.pumpkinGreen,
      bottom: colors.pumpkinOrange,
    },
  },
};

const color = {
  panda,
  rhubarb,
  bumblebee,
  pumpkin,
};

export default color;
