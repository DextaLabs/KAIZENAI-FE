"use client";
import React from "react";
import {
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import theme from "./index";
import { Provider } from "react-redux";
import store from "../store";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </Provider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
