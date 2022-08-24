import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "700": "#707070",
      "500": "#888888",
      "300": "#00000029",
    },
    white: {
      "100": "#FFFFFF",
    },
  },
  fonts: {
    heading: "Helvetica",
    body: "Helvetica",
  },
  styles: {
    global: {
      body: {
        bg: "white.100",
        color: "gray.500",
      },
    },
  },
});
