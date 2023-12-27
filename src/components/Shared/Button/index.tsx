"use client";
import { ThemeColor } from "@/app/theme";
import {
  ButtonProps,
  CircularProgress,
  Button as MUIButton,
  Typography,
  TypographyProps,
} from "@mui/material";
import classNames from "classnames";
import React from "react";

type className = React.HTMLProps<HTMLElement>["className"];
const roundedShadow: className =
  "outline-none rounded-md p-3  h-[32px] sm:h-[38px] md:h-[50px] disabled:cursor-not-allowed text-white flex gap-1";

const variants = {
  "rounded-shadow": roundedShadow,
};

type propType = {
  children: React.ReactNode;
  isSubmitting?: boolean;
  childClassName?: React.HTMLProps<HTMLElement>["className"];
  className?: React.HTMLProps<HTMLElement>["className"];
  variant?: keyof typeof variants;
  typography?: TypographyProps["variant"];
} & Omit<ButtonProps, "className" | "children" | "variant">;

const Button = (props: propType) => {
  const {
    children,
    childClassName = "text-white normal-case",
    className = "",
    variant = "rounded-shadow",
    isSubmitting = false,
    typography = "button",
    type = "button",
    ...rest
  } = props;

  return (
    <MUIButton
      className={classNames(variants[variant], className)}
      type={type}
      sx={{
        "&.Mui-disabled": {
          pointerEvents: "unset",
          color: ThemeColor.HALF_WHITE,
          opacity: 0.7,
        },
      }}
      {...rest}
    >
      <Typography variant={typography} className={childClassName}>
        {children}
      </Typography>
      {isSubmitting ? <CircularProgress size="16px" color="inherit" /> : null}
    </MUIButton>
  );
};

export default Button;
