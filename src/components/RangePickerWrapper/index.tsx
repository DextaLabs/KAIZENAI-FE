import { Typography } from "@mui/material";
import { format } from "date-fns";
import React, { useState } from "react";
import Icon from "../Shared/Icon";
import CustomDatePicker from "../Shared/RangePicker";
import { DateRangeType } from "../Shared/Types";

type propType = {
  from: Date;
  to: Date;
  setDates: React.Dispatch<React.SetStateAction<[Date, Date]>>;
};

const RangePickerWrapper = (props: propType) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { from, to, setDates } = props;

  const formatFrom = format(from, "ccc, MMM d''yy");
  const formatTo = format(to, "ccc, MMM d''yy");

  return (
    <>
      <button
        onClick={e => {
          setAnchorEl(e.currentTarget);
        }}
        className="bg-halfWhite pl-[10px] py-[6px] rounded-md"
      >
        <div className="flex items-center text-darkBlue">
          <div className="w-5">
            <Icon name="calendar" />
          </div>
          <Typography variant="h6" className="pl-3">
            {formatFrom}
          </Typography>
          <Typography variant="h6" className="px-1">
            -
          </Typography>
          <Typography variant="h6">{formatTo}</Typography>
          <div className="w-[10px px-5">
            <Icon name="chevron" />
          </div>
        </div>
      </button>
      <CustomDatePicker
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
        onSelect={(data: DateRangeType) => {
          const { to_date, from_date } = data;
          setDates([from_date, to_date]);
        }}
      />
    </>
  );
};

export default RangePickerWrapper;
