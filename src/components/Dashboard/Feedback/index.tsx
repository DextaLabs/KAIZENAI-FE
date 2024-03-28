"use client";
import RangePickerWrapper from "@/components/RangePickerWrapper";
import DropDown from "@/components/Shared/DropDown";
import { FEEDBACK } from "@/library/utils/enums";
import { Typography } from "@mui/material";
import { useState } from "react";
import Comment from "./Comment";

export const feedbackOption = [
  { label: "Feedback", value: FEEDBACK.FEEDBACK },
  { label: "Kaizen Items Developer", value: FEEDBACK.KAIZEN_ITEMS_DEVELOPER },
  { label: "Kaizen Items Manger", value: FEEDBACK.KAIZEN_ITEMS_MANGER },
  { label: "Clarity of Expression", value: FEEDBACK.CLARIFICATION },
];

const Feedback = (props: any) => {
  const { feedbacks } = props;

  const feedBack = feedbacks?.Data[FEEDBACK.FEEDBACK] ?? "No data for feedback";
  const kaizenItemsDeveloper =
    feedbacks?.Data[FEEDBACK.KAIZEN_ITEMS_DEVELOPER] ??
    "No data for kaizen items developer";
  const kaizenItemsManager =
    feedbacks?.Data[FEEDBACK.KAIZEN_ITEMS_MANGER] ??
    "No data for kaizen items manager";
  const clarity =
    feedbacks?.Data[FEEDBACK.CLARIFICATION] ??
    "No data for clarity of expression";

  const [feedbackCategory, setFeedbackCategory] = useState(
    feedbackOption[0].value
  );

  const [[from, to], setDates] = useState<[Date, Date]>([
    new Date(),
    new Date(),
  ]);

  const handleUpdateCategory = (value: string) => {
    setFeedbackCategory(value as FEEDBACK);
  };

  const getCategoryFeedback = () => {
    switch (feedbackCategory) {
      case FEEDBACK.FEEDBACK:
        return feedBack;
      case FEEDBACK.KAIZEN_ITEMS_DEVELOPER:
        return kaizenItemsDeveloper;
      case FEEDBACK.KAIZEN_ITEMS_MANGER:
        return kaizenItemsManager;
      case FEEDBACK.CLARIFICATION:
        return clarity;
      default:
        return "";
    }
  };

  return (
    <section className="mt-[30px] bg-halfWhite rounded-[16px] p-6">
      <Typography variant="subtitle1" className="text-darkPurple">
        Feedback
      </Typography>
      <div className="flex justify-between mt-3">
        <DropDown
          variant="transparent"
          options={feedbackOption}
          value={feedbackCategory}
          onChange={handleUpdateCategory}
        />
        <div className="rounded-md border-[1px] border-purpleNav">
          <RangePickerWrapper setDates={setDates} from={from} to={to} />
        </div>
      </div>

      <Comment feedback={getCategoryFeedback()} />
    </section>
  );
};

export default Feedback;
