import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export enum ThemeColor {
  PRIMARY = "#191746",
  WHITE = "#F7F6FB",
  BLACK = "#000",
  PURPLE = "#8c35ff",
  WATER_PURPLE = "#8c35ff40",
  WATER_WHITE = "#ffffff33",
  HALF_WHITE = "#ffffff50",
  WHITE_PURPLE = "#EFECF6",
  LIGHT_PURPLE = "#786C88",
  GRID = "#e2e2e2",
  GREEN = "#67C95F",
  PINK = "#FB8F8E",
  DARK_PURPLE = "#4c2185",
  DARK_BLUE = "#381a5f",
  YELLOW = "#FFBF15",
  GRAY = "#EAEAEA",
  PURPLE_NAV = "#6839A7",
  ERROR = "#F00",
}

const theme = createTheme({
  palette: {
    primary: {
      main: ThemeColor.PRIMARY,
    },
    common: {
      black: ThemeColor.PRIMARY,
      white: ThemeColor.WHITE,
    },
    text: {
      primary: ThemeColor.PRIMARY,
    },
    divider: "rgba(0,0,0,0.1)",

    background: {
      default: ThemeColor.WHITE,
    },

    error: {
      main: red.A700,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h1",
          subtitle2: "h2",
          body1: "p",
          body2: "p",
          button: "span",
          caption: "p",
        },
      },
    },
  },
  typography: {
    fontFamily: "inherit",
    fontWeightBold: "bold",
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightLight: 300,
    h1: {
      fontWeight: 700,
      fontSize: "34px",
      lineHeight: 1.2,
      "@media (max-width:900px)": {
        fontSize: "34px",
      },
      "@media (max-width:600px)": {
        fontSize: "34px",
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: 1.2,
      "@media (max-width:900px)": {
        fontSize: "30px",
      },
      "@media (max-width:600px)": {
        fontSize: "30px",
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: "25px",
      lineHeight: 1.2,
      "@media (max-width:900px)": {
        fontSize: "25px",
      },
      "@media (max-width:600px)": {
        fontSize: "25px",
      },
    },
    h4: {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: 1.2,
      "@media (max-width:900px)": {
        fontSize: "18px",
      },
      "@media (max-width:600px)": {
        fontSize: "18px",
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: "15px",
      lineHeight: 1.2,
      "@media (max-width:900px)": {
        fontSize: "15px",
      },
      "@media (max-width:600px)": {
        fontSize: "15px",
      },
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: 1.2,
      "@media (max-width:900px)": {
        fontSize: "18px",
      },
      "@media (max-width:600px)": {
        fontSize: "18px",
      },
    },
    body2: {
      fontWeight: 300,
      fontSize: "15px",
      lineHeight: 1.2,
      "@media (max-width:900px)": {
        fontSize: "15px",
      },
      "@media (max-width:600px)": {
        fontSize: "15px",
      },
    },
    body1: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: 1.2,
      "@media (max-width:900px)": {
        fontSize: "18px",
      },
      "@media (max-width:600px)": {
        fontSize: "18px",
      },
    },
    caption: {
      fontWeight: 500,
      fontSize: "10px",
      lineHeight: 1.2,
      "@media (max-width:900px)": {
        fontSize: "10px",
      },
      "@media (max-width:600px)": {
        fontSize: "10px",
      },
    },
  },
});

export default theme;
