import App from "./App.jsx";
// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";

const Tab = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "purple.500",
      color: "purple.500",
    },
    solid: {
      bg: "purple.500",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

// todo: decide on global styles
// todo: add custom components
const theme = extendTheme({
  colors,
  styles: {
    global: (props) => ({
      "html, body": {
        fontSize: "sm",
        color: props.colorMode === "dark" ? "white" : "gray.800",
        lineHeight: "tall",
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.500",
      },
    }),
  },
  components: {
    Tab,
  },
});

// 3. Pass the `theme` prop to the `ChakraProvider`

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
