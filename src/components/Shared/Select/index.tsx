import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import MuiSelect, { SelectChangeEvent } from "@mui/material/Select";
import { OutlinedInput, Typography } from "@mui/material";
import { ThemeColor } from "@/app/theme";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      borderRadius: "10px",
    },
  },
};

type propsType = {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
};

export default function Select(props: propsType) {
  const { options, value, onChange } = props;

  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    onChange(value);
  };

  function getStyles(value: string, theme: Theme) {
    return {
      fontWeight:
        options.findIndex(i => i.value === value) === -1
          ? theme.typography.fontWeightBold
          : theme.typography.fontWeightMedium,
    };
  }

  return (
    <div>
      <MuiSelect
        value={value}
        onChange={handleChange}
        classes={{
          root: "bg-purpleNav hover:bg-purpleNav border-0 outline-0 text-white rounded-[10px] before:hidden after:hidden",
          select: "pr-12 m-0 py-2 flex items-center border-0 outline-0",
          icon: "text-white border-0 outline-0",
          nativeInput: "border-b-0",
        }}
        sx={{
          "&.Mui-focused": {
            backgroundColor: ThemeColor.PURPLE_NAV,
          },
          ".MuiSelect-select": {
            paddingRight: "50px !important",
          },
        }}
        className="bg-purpleNav"
        variant="filled"
        MenuProps={MenuProps}
      >
        {options.map(i => (
          <MenuItem
            key={i.value}
            value={i.value}
            style={getStyles(i.value, theme)}
          >
            <Typography variant="h6">{i.label}</Typography>
          </MenuItem>
        ))}
      </MuiSelect>
    </div>
  );
}
