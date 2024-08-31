import { Button, Divider, Typography } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Dashboard/Header";
import OutlineInput from "../../components/Shared/Input/OutlineInput";
import Select from "../../components/Shared/Select";
import { axiosInstance } from "../../library/utils/axiosInstance";

const GetUsers = async () => {
  const response = await axiosInstance.get("organization/users/");
  return response.data;
};

interface UserProfile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  organization: string | null;
  role: string;
  date_joined: string; // ISO 8601 formatted date string
  last_login: string; // ISO 8601 formatted date string
  profile: {
    profile_picture: string;
  };
}
const TeamsOption = [
  { label: "TeamA", value: "TeamA" },
  { label: "TeamA", value: "TeamA" },
  { label: "TeamA", value: "TeamA" },
];

const PositionOption = [
  { label: "Position", value: "Position" },
  { label: "Position", value: "Position" },
  { label: "Position", value: "Position" },
  { label: "Position", value: "Position" },
];

interface DeveloperCardProp {
  developer: UserProfile;
  onPress?: () => void;
}

const DeveloperCard = ({ developer, onPress }: DeveloperCardProp) => {
  return (
    <Button onClick={onPress}>
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-xl gap-2">
        <img
          src={developer?.profile?.profile_picture}
          alt={developer?.first_name}
          className="w-24 h-24 my-4 rounded-xl"
        />
        <Typography variant="h4" className="text-darkPurple">
          {developer?.first_name}
        </Typography>
        <Typography variant="body2" className="text-darkPurple">
          {developer?.email}
        </Typography>
        <div className="flex gap-2 items-center">
          <ProgressBar
            completed={60}
            bgColor="#FFBF15"
            baseBgColor="#fff"
            height="10px"
            labelClassName="hidden"
            className="grow w-60 py-4"
          />
          <p>60%</p>
        </div>
        <Divider className="bg-[#EFECF6] h-1 w-full" />
        <Typography variant="subtitle1" className="text-[#191746] py-2">
          {developer?.role}
        </Typography>
      </div>
    </Button>
  );
};

export const MyTeams = () => {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => GetUsers(),
  });
  return (
    <div className="min-h-screen grow items-center justify-center bg-gray-900 bg-opacity-50 p-10">
      <Header title=" My Teams" />
      <div className="flex justify-between items-end pb-[20px]">
        <div className="flex-row flex gap-2">
          <Select
            className="rounded p-3 border border-[#eee] bg-[#fff]"
            id="named-select"
            name="demo-select"
            value={"TeamA"}
            options={TeamsOption}
          />
          <Select
            className="rounded p-3 border border-[#eee] bg-[#fff]"
            id="named-select"
            name="demo-select"
            value={"Position"}
            options={PositionOption}
          />
        </div>
        <OutlineInput icon="search" name="search" placeholder="search" />
      </div>
      <div className="gap-2 ">
        <Typography variant="h2" className="text-darkPurple my-3 text-[25px]">
          Top Developers
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.map((developer: UserProfile, index: number) => (
            <DeveloperCard
              key={index}
              developer={developer}
              onPress={() => navigate(`/home/${developer?.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
