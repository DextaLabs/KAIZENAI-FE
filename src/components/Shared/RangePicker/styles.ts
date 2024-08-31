import styled from "styled-components";

const CustomDatePickerWrapper = styled.div`
  padding: 22px 27px;
  width: 420px;

  .react-datepicker {
    width: 100%;
    display: flex;
    flex-direction: column;
    .react-datepicker__header {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .react-datepicker__aria-live {
      display: none;
    }
    .react-datepicker__day--disabled {
      color: rgba(0, 0, 0, 0.2) !important;
      div {
        &:hover {
          background-color: transparent;
          color: rgba(0, 0, 0, 0.2) !important;
        }
      }
    }
    .react-datepicker__day-names {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .react-datepicker__day-name {
        width: 52px;
        height: 52px;
        color: #a4b2bf;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
      }
    }
    .react-datepicker__month {
      display: flex;
      flex-direction: column;
      width: 100%;
      .react-datepicker__week {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .react-datepicker__day {
          cursor: pointer;
          border-radius: 50%;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        /* .react-datepicker__day--keyboard-selected, */
        .react-datepicker__day--selected,
        .react-datepicker__day--in-range {
          div {
            color: #fff;
            background-color: #4c2185;
          }
        }
        .react-datepicker__day--in-selecting-range {
          div {
            background-color: #4c2185;
          }
        }
        .react-datepicker__day--outside-month {
          color: rgba(0, 0, 0, 0.2);
        }
        .react-datepicker__day--weekend {
          color: rgba(0, 0, 0, 0.5);
          /* color: #a4b2bf; */
          &.react-datepicker__day--outside-month {
            color: rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
`;

const Day = styled.div`
  border-radius: 50%;
  width: 42px;
  height: 42px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out 300ms;
  &:hover {
    background-color: #4c2185;
    color: #fff;
  }
`;

const FrequencyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FrequencyButton = styled.button<{ $active?: boolean }>`
  cursor: pointer;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 34px;
  border-radius: 20px;
  border: none;
  background-color: ${({ $active }) => ($active ? "#E4E4F5" : "#f8f8f8")};
  box-shadow: ${({ $active }) =>
    $active ? "inset 0px 1px 5px #00000041" : "0 0 2px rgba(0, 0, 0, 0.33)"};
  transition: all ease-in-out 300ms;
`;

const FromToButtonContainer = styled.div`
  margin-top: 22px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const FromToButton = styled.button<{ $active?: boolean }>`
  width: 127px;
  height: 34px;
  border-radius: 20px;
  border: 1px solid #dfe0e3;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  box-shadow: ${({ $active }) =>
    $active ? "inset 0px 1px 5px #00000041" : "none"};
  &:last-of-type {
    margin-left: 7px;
  }
`;

const DatePickerHeader = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-bottom: 16px;
  height: 19px;
`;
const LeftArrow = styled.div`
  position: absolute;
  left: 0;
`;
const RightArrow = styled.div`
  position: absolute;
  right: 0;
`;

const ActionButtonsContainer = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export {
  CustomDatePickerWrapper,
  FromToButton,
  FromToButtonContainer,
  FrequencyContainer,
  FrequencyButton,
  DatePickerHeader,
  LeftArrow,
  RightArrow,
  Day,
  ActionButtonsContainer,
};
