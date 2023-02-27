import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    primary: "#1c2310",
    secondary: "#B82601",
    gray: {
      50: "#F5F5F5",
      100: "#EBEBEB",
      200: "#D6D6D6",
      300: "#C2C2C2",
      400: "#ADADAD",
      500: "#999999",
      600: "#858585",
      700: "#707070",
      800: "#5C5C5C",
      900: "#474747",
    },
  },
  fonts: {
    body: "'Open Sans', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "medium",
        borderRadius: "md",
        _focus: {
          boxShadow: "none",
        },
      },
      variants: {
        solid: {
          bg: "primary",
          color: "white",
          _hover: {
            bg: "secondary",
          },
        },
        outline: {
          borderColor: "primary",
          color: "primary",
          _hover: {
            bg: "primary",
            color: "white",
          },
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderColor: "gray.300",
            _hover: {
              borderColor: "primary",
            },
            _focus: {
              borderColor: "primary",
              boxShadow: "none",
            },
          },
        },
      },
    },
  },
});

export default customTheme;
