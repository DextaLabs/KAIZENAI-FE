import { ThemeColor } from "@/app/theme";
import { SxProps, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MuiSelect, {
  SelectChangeEvent,
  SelectClasses,
  SelectProps,
} from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";
import classNames from "classnames";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;

type className = React.HTMLProps<HTMLElement>["className"];
const transparent: className = "bg-transparent";
const purple: className = "bg-purpleNav";

const variants = {
  transparent: transparent,
  purple: purple,
};

const purpleClasses: Partial<SelectClasses> = {
  root: "bg-purpleNav hover:bg-purpleNav border-0 outline-0 text-white rounded-[10px] before:hidden after:hidden",
  select: "pr-12 m-0 py-2 flex items-center border-0 outline-0",
  icon: "text-white border-0 outline-0",
  nativeInput: "border-b-0",
};
const transparentClasses: Partial<SelectClasses> = {
  root: "bg-transparent hover:bg-transparent border-[1px] border-purpleNav outline-0 text-darkblue rounded-[10px] before:hidden after:hidden height-[32px]",
  select: "pr-12 m-0  py-1 flex items-center border-0 outline-0 bg-transparent",
  icon: "text-black border-0 outline-0",
  nativeInput: "border-b-0",
};

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
  variant?: keyof typeof variants;
} & Omit<SelectProps, "value" | "onChange" | "variant">;

export default function DropDown(props: propsType) {
  const {
    options,
    value,
    onChange,
    classes = {},
    variant = "purple",
    className = "",
  } = props;

  const getDefaultClasses = () => {
    switch (variant) {
      case "transparent":
        return transparentClasses;
      default:
        return purpleClasses;
    }
  };

  const getSX = () => {
    const sx: SxProps<Theme> = {
      ".MuiSelect-select": {
        paddingRight: "50px !important",
      },
    };
    switch (variant) {
      case "transparent":
        sx["&.Mui-focused"] = {
          backgroundColor: "transparent",
        };
        break;
      default:
        sx["&.Mui-focused"] = {
          backgroundColor: ThemeColor.PURPLE_NAV,
        };
    }

    return sx;
  };

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
          ...getDefaultClasses(),
          ...classes,
        }}
        sx={getSX()}
        className={classNames(variant, { [className]: !className })}
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
