import { ThemeColor } from "@/provider/theme";
import { Option as BaseOption, optionClasses } from "@mui/base/Option";
import { Popper as BasePopper } from "@mui/base/Popper";
import {
  Select as BaseSelect,
  SelectProps,
  SelectRootSlotProps,
  selectClasses,
} from "@mui/base/Select";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import { styled } from "@mui/system";
import * as React from "react";

const MuiSelect = React.forwardRef(function Select<
  TValue extends {},
  Multiple extends boolean
>(
  props: SelectProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const slots: SelectProps<TValue, Multiple>["slots"] = {
    root: CustomButton,
    listbox: Listbox,
    popper: Popper,
    ...props.slots,
  };

  return <BaseSelect {...props} ref={ref} slots={slots} />;
}) as <TValue extends {}, Multiple extends boolean>(
  props: SelectProps<TValue, Multiple> & React.RefAttributes<HTMLButtonElement>
) => JSX.Element;

type propType = {
  options: { label: string; value: string }[];
} & SelectProps<{}, false>;

export default function Select(props: propType) {
  const { options, ...rest } = props;
  return (
    <MuiSelect {...rest}>
      {options.map(i => (
        <Option value={i.value} key={i.value}>
          {i.label}
        </Option>
      ))}
    </MuiSelect>
  );
}

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const CustomButton = React.forwardRef(function CustomButton<
  TValue extends {},
  Multiple extends boolean
>(
  props: SelectRootSlotProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { ownerState, ...other } = props;

  return (
    <StyledButton
      type="button"
      value={ownerState.value as string}
      {...other}
      ref={ref}
    >
      {other.children}
      <UnfoldMoreRoundedIcon />
    </StyledButton>
  );
});

const StyledButton = styled("button", {
  shouldForwardProp: () => true,
})(
  ({ theme, value }) => `
  position: relative;
  font-size: 16px;
  box-sizing: border-box;
  min-width: 100%;
  padding: 8px 12px;
  padding-left: 12px;
  border-radius: 8px;
  text-align: left;
  line-height: 1.2;
  background-color: ${ThemeColor.WHITE} !important;
  border: none;
  font-weight: 500;
  color: ${value ? ThemeColor.BLACK : ThemeColor.PLACEHOLDER};
  height: 32px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;
   @media screen and (min-width: 600px) {
      height: 38px;
      padding-left: 16px;
    };
    @media screen and (min-width: 900px) {
      height: 50px;
      padding-left: 20px;
  };


  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }
  &:disabled {
    opacity: 0.7 !important;
    cursor: not-allowed;
  }

  &.${selectClasses.focusVisible} {
    outline: 0;
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[700] : blue[200]
    };
  }

  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }
  `
);

const Listbox = styled("ul")(
  ({ theme }) => `
  font-size: 16px;
  max-height: 300px;
  overflow: auto;
  box-sizing: border-box;
  padding: 6px;
  
  margin: 12px 0;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
  };
  `
);

const Option = styled(BaseOption)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &:focus-visible {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const Popper = styled(BasePopper)`
  z-index: 1;
`;
