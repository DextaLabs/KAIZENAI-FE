"use client";
import { FEEDBACK } from "@/app/utils/enums";
import RangePickerWrapper from "@/components/RangePickerWrapper";
import DropDown from "@/components/Shared/DropDown";
import { Typography } from "@mui/material";
import { useState } from "react";
import Comment from "./Comment";

export const feedbackOption = [
  { label: "Language Proficiency", value: FEEDBACK.LANGUAGE_PROFICIENCY },
  { label: "Cultural Harmony", value: FEEDBACK.CULTURAL_HARMONY },
  { label: "Listening Ability", value: FEEDBACK.LISTENING_ABILITY },
  { label: "Issue Resolution", value: FEEDBACK.ISSUE_RESOLUTION },
  { label: "Clarity of Expression", value: FEEDBACK.CLARITY_OF_EXPRESSION },
  { label: "Collaboration", value: FEEDBACK.COLLABORATION },
  { label: "Emotional Intelligence", value: FEEDBACK.EMOTIONAL_INTELLIGENCE },
];

const Feedback = () => {
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

      <Comment />
    </section>
  );
};

export default Feedback;
