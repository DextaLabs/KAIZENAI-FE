"use client";
import React from "react";
import {
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import theme from "./index";
import { Provider } from "react-redux";
import store from "../store";
import WithAuth from "../hoc/WithAuth";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <WithAuth>{children}</WithAuth>
        </MuiThemeProvider>
      </Provider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
