import { withDefaultColorScheme, extendTheme } from "@chakra-ui/react";

const components = {
  Button: {
    baseStyle: {
      borderRadius: "4px",
    },
    defaultProps: {
      size: "md",
    },
  },
};

// 2. Call `extendTheme` and pass your custom values
const customTheme = extendTheme(
  {
    colors: {
      brand: {
        50: "#E7EDFE",
        100: "#BBCDFB",
        200: "#90ADF9",
        300: "#648DF7",
        400: "#396DF4",
        500: "#0D4DF2",
        600: "#0B3DC1",
        700: "#082E91",
        800: "#051F61",
        900: "#030F30",
      },
      gray: {
        50: "#F2F2F2",
        100: "#DBDBDB",
        200: "#C4C4C4",
        300: "#ADADAD",
        400: "#969696",
        500: "#808080",
        600: "#666666",
        700: "#4D4D4D",
        800: "#333333",
        900: "#1A1A1A",
      },
      yellow: {
        50: "#FEF9E7",
        100: "#FBEDBB",
        200: "#F9E290",
        300: "#F7D664",
        400: "#F4CB39",
        500: "#F2C00D",
        600: "#C1990B",
        700: "#917308",
        800: "#614D05",
        900: "#302603",
      },
    },
    initialColorMode: "light",
    useSystemColorMode: false,
    fonts: {
      heading: `var(--font-generalSans), sans-serif`,
      body: `var(--font-generalSans), sans-serif`,
    },
    components,
  },
  withDefaultColorScheme({ colorScheme: "brand" }),
);

export default customTheme;
