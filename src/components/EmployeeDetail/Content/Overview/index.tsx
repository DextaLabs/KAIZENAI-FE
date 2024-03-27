"use client";
import DropDown from "@/components/Shared/DropDown";
import RadialChart from "@/components/Shared/charts/Radial";
import { labelValue } from "@/library/utils/classes";
import { DATA_CATEGORY } from "@/library/utils/enums";
import {
  getCodeOverview,
  getCommunicationOverview,
} from "@/library/utils/parser";
import { ThemeColor } from "@/provider/theme";
import { Typography } from "@mui/material";
import { differenceInCalendarMonths } from "date-fns";
import Image from "next/image";
import { dataCategoryOption } from "..";

type propType = {
  dataCategory: DATA_CATEGORY;
  handleUpdateCategory: (value: string) => void;
} & any;

const Overview = (props: propType) => {
  const { dataCategory, handleUpdateCategory, Data, Name, Role, Email } = props;

  const { Date: joinDate } = Data;

  const duration = differenceInCalendarMonths(new Date(), new Date(joinDate));

  const communicationOverview = getCommunicationOverview(Data);
  const codeOverview = getCodeOverview({ codeCommits: 50, codeReviews: 13 });
  const aboutOverview = [
    {
      color: ThemeColor.YELLOW,
      value: Data.Level,
      label: "Level",
      tailwind: `text-yellow`,
    },
  ];

  const getOverviewChart = () => {
    switch (dataCategory) {
      case DATA_CATEGORY.ABOUT:
        return (
          <RadialChart
            config={{
              series: aboutOverview.map(i => i.value),
              colors: aboutOverview.map(i => i.color),
              labels: aboutOverview.map(i => i.label),
            }}
            plotOptions={{
              radialBar: {
                hollow: {
                  size: "75%",
                },
              },
            }}
            chartKey="about"
          />
        );
      case DATA_CATEGORY.COMMUNICATION:
        return (
          <RadialChart
            config={{
              series: communicationOverview.map(i => i.value),
              colors: communicationOverview.map(i => i.color),
              labels: communicationOverview.map(i => i.label),
            }}
            chartKey="communication"
          />
        );
      case DATA_CATEGORY.CODE_OVERVIEW:
        return (
          <RadialChart
            config={{
              series: codeOverview.map(i => i.value),
              colors: codeOverview.map(i => i.color),
              labels: codeOverview.map(i => i.label),
            }}
            plotOptions={{
              radialBar: {
                hollow: {
                  size: "65%",
                },
              },
            }}
            chartKey="code"
          />
        );
    }
  };

  const getOverviewData = () => {
    switch (dataCategory) {
      case DATA_CATEGORY.ABOUT:
        return (
          <RadialChart
            config={{
              series: aboutOverview.map(i => i.value),
              colors: aboutOverview.map(i => i.color),
              labels: aboutOverview.map(i => i.label),
            }}
            plotOptions={{
              radialBar: {
                hollow: {
                  size: "75%",
                },
              },
            }}
            chartKey="about"
          />
        );
      case DATA_CATEGORY.COMMUNICATION:
        return communicationOverview.map(i => (
          <div key={i.label} className={labelValue}>
            <Typography variant="body1" className="text-black">
              {i.label}
            </Typography>
            <Typography variant="h1" className={i.tailwind}>
              {i.value}%
            </Typography>
          </div>
        ));
      case DATA_CATEGORY.CODE_OVERVIEW:
        return codeOverview.map(i => (
          <div key={i.label} className={labelValue}>
            <Typography variant="body1" className="text-black">
              {i.label}
            </Typography>
            <Typography variant="h1" className={i.tailwind}>
              {i.value}%
            </Typography>
          </div>
        ));
    }
  };

  return (
    <div className="flex row-span-3 bg-halfWhite gap-[40px]  rounded-[16px] p-[24px] pl-[65px] items-center">
      <div className="w-[300px] h-full">{getOverviewChart()}</div>
      <section className="flex flex-col flex-1 gap-5 justify-between h-full py-4">
        <div className={labelValue}>
          <Typography variant="h1" className="text-darkPurple capitalize">
            {Name}
          </Typography>
          <Typography variant="body1" className="text-lightPurple">
            {Role}
          </Typography>
          {dataCategory === DATA_CATEGORY.ABOUT && (
            <>
              <Typography
                variant="body1"
                className="text-lightPurple font-bold"
              >
                {Email}
              </Typography>
              <Typography
                variant="body1"
                className="text-lightPurple font-bold"
              >
                {duration} Months
              </Typography>
            </>
          )}
        </div>

        {[DATA_CATEGORY.COMMUNICATION, DATA_CATEGORY.CODE_OVERVIEW].includes(
          dataCategory
        ) && <div className="flex gap-5 lg:gap-8">{getOverviewData()}</div>}

        <DropDown
          options={dataCategoryOption}
          value={dataCategory}
          onChange={handleUpdateCategory}
        />
      </section>
      <Image
        src={"/assets/png/avatar.png"}
        alt="avatar"
        width={260}
        height={260}
        className="rounded-2xl"
        style={{ aspectRatio: 1 }}
      />
    </div>
  );
};

export default Overview;
