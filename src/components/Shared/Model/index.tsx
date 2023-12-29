import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import MuiModal from "@mui/material/Modal";
import * as React from "react";

const defaultStyle: SxProps<Theme> = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  borderRadius: "16px",
  p: 2,
};

type propsType = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  style?: SxProps<Theme>;
};

export default function Modal(props: propsType) {
  const { children, onClose, open, style = {} } = props;

  const boxStyle = { ...defaultStyle, ...style };

  return (
    <MuiModal
      open={open}
      onClose={onClose}
      classes={{
        backdrop: "bg-darkPurple",
      }}
      sx={{
        ".MuiBackdrop-root": {
          opacity: "0.7 !important",
        },
      }}
    >
      <Box sx={boxStyle}>{children}</Box>
    </MuiModal>
  );
}
