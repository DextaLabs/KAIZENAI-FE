"use client";
import { useState, useEffect } from "react";
import {
  CustomDatePickerWrapper,
  FromToButton,
  FromToButtonContainer,
  FrequencyContainer,
  FrequencyButton,
  Day,
  ActionButtonsContainer,
} from "./styles";
import { Button } from "@mui/material";
import Popover, { PopoverProps } from "@mui/material/Popover";
import DatePicker from "react-datepicker";
import { format, getDate, add } from "date-fns";
import RenderCustomHeader from "./renderCustomHeader";
import { DateRangeType } from "../Types";

const frequencyArray: Array<{
  label: string;
  unit: "hourly" | "daily" | "weekly" | "monthly";
  value: "1d" | "1w" | "1m" | "1y";
}> = [
  {
    label: "DAILY",
    unit: "hourly",
    value: "1d",
  },
  {
    label: "WEEKLY",
    unit: "hourly",
    value: "1w",
  },
  {
    label: "MONTHLY",
    unit: "daily",
    value: "1m",
  },
  {
    label: "YEARLY",
    unit: "daily",
    value: "1y",
  },
];

type CustomDatePickerProps = {
  onClose: () => void;
  onSelect: (data: DateRangeType) => void;
} & Omit<PopoverProps, "onSelect">;

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  onClose,
  onSelect,
  ...popoverProps
}) => {
  const [frequency, setFrequency] = useState<"1d" | "1w" | "1m" | "1y">("1d");
  const [[from, to], setDates] = useState<[Date | null, Date | null]>([
    new Date(),
    new Date(),
  ]);
  const [error, setError] = useState<string>("");
  const fromDisplayString = from ? format(from, "MM/dd/yy") : null;
  const toDisplayString = to ? format(to, "MM/dd/yy") : null;
  const from_date = from ? format(from, "yyyy-MM-dd") : null;
  const to_date = to ? format(to, "yyyy-MM-dd") : null;

  const minDate = new Date("2020-01-02");

  const onChangeDates = (dates: [Date | null, Date | null]) => {
    const [start] = dates;
    if (start) {
      if (frequency === "1d") {
        setDates([start, start]);
      } else if (frequency === "1w") {
        const newFrom = add(start, { weeks: -1, days: 1 });
        if (newFrom > minDate) {
          setDates([newFrom, start]);
        } else {
          setDates([minDate, start]);
        }
      } else if (frequency === "1m") {
        const newFrom = add(start, { months: -1, days: 1 });
        if (newFrom > minDate) {
          setDates([newFrom, start]);
        } else {
          setDates([minDate, start]);
        }
      } else if (frequency === "1y") {
        const newFrom = add(start, { years: -1, days: 1 });
        if (newFrom > minDate) {
          setDates([newFrom, start]);
        } else {
          setDates([minDate, start]);
        }
      }
    }
  };

  const onChangeFrequency = () => {
    if (to) {
      if (frequency === "1d") {
        setDates([to, to]);
      } else if (frequency === "1w") {
        const newFrom = add(to, { weeks: -1, days: 1 });
        if (newFrom > minDate) {
          setDates([newFrom, to]);
        } else {
          setDates([minDate, to]);
        }
      } else if (frequency === "1m") {
        const newFrom = add(to, { months: -1, days: 1 });
        if (newFrom > minDate) {
          setDates([newFrom, to]);
        } else {
          setDates([minDate, to]);
        }
      } else if (frequency === "1y") {
        const newFrom = add(to, { years: -1, days: 1 });
        if (newFrom > minDate) {
          setDates([newFrom, to]);
        } else {
          setDates([minDate, to]);
        }
      }
    }
  };

  // async select dates
  const setCustomDate = async () => {
    if (from_date && to_date) {
      const payload: DateRangeType = {
        from_date: new Date(from_date),
        to_date: new Date(to_date),
        frequency: frequency === "1d" ? "hourly" : "daily",
        preset: "custom",
      };
      onSelect(payload);
      onClose();
    } else {
      setError("Please select from and to date.");
    }
  };
  useEffect(() => {
    onChangeFrequency();
  }, [frequency]);

  return (
    <Popover
      {...popoverProps}
      classes={{ root: "custom-date-popover" }}
      onClose={onClose}
    >
      <CustomDatePickerWrapper data-testid="CustomDatePicker">
        <FrequencyContainer>
          {frequencyArray.map((freq) => (
            <FrequencyButton
              $active={frequency === freq.value}
              data-testid={`${freq.value}${
                frequency === freq.value ? "-active" : ""
              }`}
              key={freq.value + freq.label}
              onClick={() => setFrequency(freq.value)}
            >
              {freq.label}
            </FrequencyButton>
          ))}
        </FrequencyContainer>
        <FromToButtonContainer>
          <FromToButton $active>From: {fromDisplayString}</FromToButton>
          <FromToButton>To: {toDisplayString}</FromToButton>
        </FromToButtonContainer>
        <DatePicker
          inline
          useWeekdaysShort
          selectsRange
          onChange={onChangeDates}
          renderDayContents={(day, date) => (
            <Day data-testid={`day-${day}`}>{getDate(date || 0)}</Day>
          )}
          renderCustomHeader={(props) => (
            <RenderCustomHeader
              {...props}
              frequency={frequency}
              from={from}
              to={to}
            />
          )}
          shouldCloseOnSelect={false}
          selected={from}
          minDate={minDate}
          maxDate={new Date()}
          startDate={from as Date}
          endDate={to as Date}
          showDisabledMonthNavigation
        ></DatePicker>
        <div>{error}</div>
        <ActionButtonsContainer>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="outlined" onClick={setCustomDate}>
            Set Date
          </Button>
        </ActionButtonsContainer>
      </CustomDatePickerWrapper>
    </Popover>
  );
};

export default CustomDatePicker;
