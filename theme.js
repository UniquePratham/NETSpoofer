// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e3fdfd",
      100: "#cbf1f1",
      200: "#a8e4e4",
      300: "#81d7d7",
      400: "#57caca",
      500: "#3bb0b0",
      600: "#2a8888",
      700: "#1a6161",
      800: "#0a3a3a",
      900: "#001414",
    },
    background: {
      100: "#1a202c", // Dark background
      200: "#2d3748", // Darker background for sections
    },
    text: {
      100: "#e2e8f0", // Light text color
      200: "#a0aec0", // Lighter text color for descriptions
    },
  },
  styles: {
    global: {
      body: {
        bg: "background.100",
        color: "text.100",
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        color: "brand.400",
        _hover: {
          textDecoration: "none",
          color: "brand.300",
        },
      },
    },
    Button: {
      baseStyle: {
        rounded: "md",
      },
      sizes: {
        md: {
          h: 10,
          minW: 10,
          fontSize: "md",
          px: 4,
        },
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.400",
          },
        },
      },
    },
  },
});

export default theme;
