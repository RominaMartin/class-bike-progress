const colors = {
  ocean900: "#03045E",
  ocean800: "#023E8A",
  ocean700: "#0077B6",
  ocean600: "#008BC7",
  ocean500: "#48B5E4",
  ocean400: "#90D8EF",
  ocean300: "#ADE8F4",
  ocean200: "#CAF0F8",
  ocean100: "#E4FAFF",
  aubergine900: "#1D0A25",
  aubergine800: "#2C003E",
  aubergine700: "#512B58",
  aubergine600: "#775175",
  aubergine500: "#A888A3",
  aubergine400: "#C2A4B6",
  aubergine300: "#E4C7D0",
  aubergine200: "#EFDDE3",
  aubergine100: "#F4EFF1",
  white: "#FFFFFF",
};

const spacings = {
  small1: "4px",
  small2: "8px",
  small3: "16px",
  small4: "24px",
  medium1: "32px",
  medium2: "40px",
  medium3: "48px",
  medium4: "56px",
  medium5: "64px",
  large1: "80px",
  large2: "96px",
  large3: "128px",
  large4: "200px",
};

const global = {
  bgColor: colors.white,
  color: "#333333",
  fontFamily: "Tahoma, Helvetica, Arial, Roboto, sans-serif",
  fontSize: "14px",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
};

const headings = [
  {
    fontFamily: global.fontFamily,
    fontWeight: global.fontWeightMedium,
    size: "36px",
  },
  {
    fontFamily: global.fontFamily,
    fontWeight: global.fontWeightMedium,
    size: "32px",
  },
  {
    fontFamily: global.fontFamily,
    fontWeight: global.fontWeightMedium,
    size: "24px",
  },
  {
    fontFamily: global.fontFamily,
    fontWeight: global.fontWeightMedium,
    size: "16px",
  },
  {
    fontFamily: global.fontFamily,
    fontWeight: global.fontWeightMedium,
    size: "12px",
  },
];

export const DefaultTheme = {
  colors,
  global,
  headings,
  spacings,
};
