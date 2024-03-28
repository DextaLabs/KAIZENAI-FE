"use client";
import { Managers } from "@/library/utils/constant";
import { useAuthStore } from "@/provider/store/authentication";
import { useLoginUserDetailMutation } from "@/provider/store/authentication/api";
import { Badge } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import RangePickerWrapper from "../RangePickerWrapper";
import Icon from "../Shared/Icon";
import Content from "./Content";
import Feedback from "./Feedback";
import Header from "./Header";

const Dashboard = () => {
  const [loginUserDetail] = useLoginUserDetailMutation();
  const { profileDetail } = useAuthStore();
  const [[from, to], setDates] = useState<[Date, Date]>([
    new Date(),
    new Date(),
  ]);

  useEffect(() => {
    loginUserDetail({});
  }, []);

  return (
    <main className={"p-9"}>
      <Header {...Managers[0]} />
      <div className="flex  justify-between">
        <RangePickerWrapper setDates={setDates} from={from} to={to} />
        <div className="flex gap-3">
          <Badge badgeContent={4} color="error">
            <Image
              src="/assets/png/trophy.png"
              width={30}
              height={30}
              alt="trophy"
            />
          </Badge>
          <Badge badgeContent={4} color="error">
            <div className="h-[30px] w-[25px]">
              <Icon name="bell" />
            </div>
          </Badge>
        </div>
      </div>
      <Content />
      <Feedback
        feedbacks={
          profileDetail
            ? {
                Data: {
                  ...profileDetail,
                  Clarification: profileDetail.cultural_insights,
                },
              }
            : undefined
        }
      />
    </main>
  );
};

export default Dashboard;
