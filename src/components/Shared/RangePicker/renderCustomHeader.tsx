"use client";
import { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import { DatePickerHeader, LeftArrow, RightArrow } from "./styles";
import { format } from "date-fns";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface CustomMonthsPicker extends ReactDatePickerCustomHeaderProps {
  frequency: "1d" | "1w" | "1m" | "1y";
  from: Date | null;
  to: Date | null;
}

const RenderCustomHeader: React.FC<CustomMonthsPicker> = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  changeMonth,
  changeYear,
  frequency,
  from,
  to,
}) => {
  const formattedDate = format(date, "MMMM yyyy");

  return (
    <DatePickerHeader>
      <LeftArrow>
        <IconButton
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
          data-testid="CustomDatePicker-previous"
        >
          <ChevronLeft />
        </IconButton>
      </LeftArrow>
      <RightArrow>
        <IconButton
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
          data-testid="CustomDatePicker-next"
        >
          <ChevronRight />
        </IconButton>
      </RightArrow>
      {formattedDate}
    </DatePickerHeader>
  );
};

export default RenderCustomHeader;
