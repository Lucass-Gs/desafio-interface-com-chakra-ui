import { extendTheme } from "@chakra-ui/react";
export const theme = extendTheme({
  colors: {
    highlight: {
      "900": "#FFBA08",
      "500": "rgba(255,186,8,0.50)",
    },
    dark: {
      black: "#000000",
      "heading-text": "#47585B",
      info: "#999999",
      "info-50": "rgba(153,153,153,0.50)",
    },
    light: {
      white: "#ffffff",
      "heading-text": "#F5F8FA",
      info: "#DADADA",
    },
    fonts: {
      heading: "Roboto",
      body: "Roboto",
    },
  },
  styles: {
    global: {
      body: {
        color: "dark.heading-text",
      },
    },
  },
});
