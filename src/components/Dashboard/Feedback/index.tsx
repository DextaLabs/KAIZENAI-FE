"use client";
import { Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { FEEDBACK } from "../../../library/utils/enums";
import DropDown from "../../Shared/DropDown";
import Comment from "./Comment";
import { UserData, useUserStore } from "../../../pages/dashboard/store";

export const feedbackOption = [
  { label: "Weekly report", value: FEEDBACK.Weekly_report },
  { label: "Insights", value: FEEDBACK.Insights },
  { label: "Action Items", value: FEEDBACK.Action_Items },
];

const Feedback = (props: any) => {
  const { users, others } = useUserStore();
  const { feedbacks, other } = props;

  const currentUser: UserData | null = useMemo(() => {
    if (other) return others;
    else {
      return users;
    }
  }, [other, others, users]);

  const feedBack =
    feedbacks?.Data[FEEDBACK.Action_Items] ??
    currentUser?.feedback?.action_items;
  const kaizenItemsDeveloper =
    feedbacks?.Data[FEEDBACK.Insights] ?? currentUser?.feedback?.insights;

  const clarity =
    feedbacks?.Data[FEEDBACK.Weekly_report] ??
    currentUser?.feedback?.weekly_report;

  const [feedbackCategory, setFeedbackCategory] = useState(
    feedbackOption[0].value
  );

  const handleUpdateCategory = (value: string) => {
    setFeedbackCategory(value as FEEDBACK);
  };

  const getCategoryFeedback = () => {
    switch (feedbackCategory) {
      case FEEDBACK.Weekly_report:
        return feedBack;
      case FEEDBACK.Action_Items:
        return kaizenItemsDeveloper;
      case FEEDBACK.Insights:
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
      </div>

      <Comment feedback={getCategoryFeedback()} />
    </section>
  );
};

export default Feedback;
