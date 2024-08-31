"use client";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useAuth } from "../../library/utils/AuthProvider";
import { axiosInstance } from "../../library/utils/axiosInstance";
import { useUserStore } from "../../pages/dashboard/store";
import RangePickerWrapper from "../RangePickerWrapper";
import Content from "./Content";
import Feedback from "./Feedback";
import Header from "./Header";
import { useParams } from "react-router-dom";

const GetUserDetails = async () => {
  const response = await axiosInstance.get(`emotion-matrix/`);
  return response.data;
};

const GetOtherUserDetails = async (id: string) => {
  const response = await axiosInstance.get(`emotion-matrix/${id}`);
  return response.data;
};

const Dashboard = () => {
  const { id } = useParams();

  const { user } = useAuth();
  const { setUsers, setOthers } = useUserStore();
  // const [loginUserDetail] = useLoginUserDetailMutation();
  // const { profileDetail } = useAuthStore();
  const [[from, to], setDates] = useState<[Date, Date]>([
    new Date(),
    new Date(),
  ]);

  const { data } = useQuery({
    queryKey: ["user", user?.id],
    queryFn: () => GetUserDetails(),
    enabled: Boolean(!id),
  });

  const { data: otherUser } = useQuery({
    queryKey: ["user", id],
    queryFn: () => GetOtherUserDetails(id as string),
    enabled: Boolean(id),
  });

  useEffect(() => {
    if (data) {
      sessionStorage.setItem("user", JSON.stringify(data));
      setUsers(data);
    }
  }, [data, setUsers]);
  useEffect(() => {
    if (otherUser) {
      setOthers(otherUser);
    }
  }, [otherUser, setOthers]);
  // useEffect(() => {
  //   loginUserDetail({});
  // }, []);

  return (
    <div className={"p-9"}>
      <Header />
      <div className="flex  justify-between">
        <RangePickerWrapper setDates={setDates} from={from} to={to} />
      </div>
      <Content other={Boolean(id)} />
      <Feedback other={Boolean(id)} feedbacks={null} />
    </div>
  );
};

export default Dashboard;
