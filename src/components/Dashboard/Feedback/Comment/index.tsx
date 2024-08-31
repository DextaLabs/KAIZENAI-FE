"use client";
import { Typography } from "@mui/material";

// const feedback = {
//   overview:
//     "You have consistently demonstrated commendable performance as a developer, earning an overall score of 75%. This feedback aims to recognize your strengths and provide detailed recommendations for improvement in both communication and coding skills.",
//   positive: [
//     "Openness to Feedback: Your receptiveness to feedback is commendable, reflecting a genuine eagerness to learn and enhance your communication skills. This positive attitude contributes to a collaborative team environment.",
//     "Clarity in Expressing Ideas: Your communication style is marked by clarity, making it easier for team members to comprehend complex concepts. This clarity is a valuable asset in fostering effective collaboration.",
//   ],
//   improvement: [
//     "Proactive Communication: To further elevate your communication skills, consider taking a more proactive role in team discussions. Initiating communication without waiting for prompts can enhance team dynamics and idea exchange.",
//     "Inclusive Language: Encouraging the use of inclusive language will contribute to creating a more welcoming and collaborative atmosphere within the team. This small adjustment can have a significant positive impact.",
//   ],
//   summary:
//     "This feedback aims to highlight your communication strengths and provide targeted recommendations for improvement. Your commitment to growth and development is acknowledged, and these suggestions are intended to support your continuous improvement in communication skills.",
// };

const Comment = (props: any) => {
  const { feedback } = props;

  return (
    <div className="mt-[30px] bg-white rounded-[16px] p-6 flex gap-4">
      <div>
        <Typography
          variant="body2"
          className=" text-black whitespace-break-spaces"
        >
          {feedback}
        </Typography>
        {/* <div className="mt-5">
          <Typography
            variant="body2"
            className="text-purpleNav font-semibold inline-block"
          >
            {`Communication Skills Feedback`}
          </Typography>
          <Typography variant="body2" className="ml-1 inline-block">
            {`for You, Hassan.`}
          </Typography>
        </div>

        <Typography
          variant="body2"
          className="mt-5 text-darkGreen font-semibold inline-block"
        >
          {`Positive Feedback:`}
        </Typography>

        <div className="mt-2 flex flex-col gap-5	ml-4">
          {feedback.positive.map(i => (
            <Typography
              key={i}
              variant="body2"
              className="relative before:content-[''] before:h-1 before:w-1 before:bg-black before:rounded-full ml-1 inline-block before:absolute before:left-[-16px] before:top-[6px]"
            >
              {i}
            </Typography>
          ))}
        </div>

        <Typography
          variant="body2"
          className="mt-5 text-yellow font-semibold inline-block"
        >
          {`Areas for Improvement:`}
        </Typography>

        <div className="mt-2 flex flex-col gap-5	ml-4">
          {feedback.improvement.map(i => (
            <Typography
              key={i}
              variant="body2"
              className="relative before:content-[''] before:h-1 before:w-1 before:bg-black before:rounded-full ml-1 inline-block before:absolute before:left-[-16px] before:top-[6px]"
            >
              {i}
            </Typography>
          ))}
        </div>

        <Typography variant="body2" className="mt-5 text-black">
          {feedback.summary}
        </Typography> */}
      </div>
    </div>
  );
};

export default Comment;
