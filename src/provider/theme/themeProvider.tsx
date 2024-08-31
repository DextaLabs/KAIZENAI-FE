"use client";
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import theme from "./index";
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
