import { layoutSpacing } from "@/app/utils/classes";
import { Managers } from "@/app/utils/constant";
import { Typography } from "@mui/material";
import Header from "../Dashboard/Header";
import Badge from "./Badge";

const images = [
  "/assets/png/generalBadge.png",
  "/assets/png/managerBadge.png",
  "/assets/png/pirateBadge.png",
  "/assets/png/listeningBadge.png",
];

export type BadgesType = {
  title: string;
  images: string;
  description: string;
  achieved: boolean;
}[];

const Badges: BadgesType = [
  {
    title: "Galactic General",
    images: images[0],
    description: "Win this badge by scoring a perfect score in managing",
    achieved: true,
  },
  {
    title: "Team manager",
    images: images[1],
    description: "Win this badge by scoring a perfect score in managing",
    achieved: true,
  },
  {
    title: "Pixel Pirate",
    images: images[2],
    description: "Win this badge by scoring a perfect score in managing",
    achieved: true,
  },
  {
    title: "Listening Leader",
    images: images[3],
    description: "Win this badge by scoring a perfect score in managing",
    achieved: true,
  },
  {
    title: "Galactic General",
    images: images[0],
    description: "Win this badge by scoring a perfect score in managing",
    achieved: true,
  },
  {
    title: "Team manager",
    images: images[1],
    description: "Win this badge by scoring a perfect score in managing",
    achieved: true,
  },
];
const UnAchievedBadges: BadgesType = [
  {
    title: "Galactic General",
    images: images[0],
    description: "Win this badge by scoring a perfect score in managing",
    achieved: true,
  },
  {
    title: "Team manager",
    images: images[1],
    description: "Win this badge by scoring a perfect score in managing",
    achieved: true,
  },
  {
    title: "Pixel Pirate",
    images: images[2],
    description: "Win this badge by scoring a perfect score in managing",
    achieved: false,
  },
  {
    title: "Listening Leader",
    images: images[3],
    description: "Win this badge by scoring a perfect score in managing",
    achieved: false,
  },
  {
    title: "Galactic General",
    images: images[0],
    description: "Win this badge by scoring a perfect score in managing",
    achieved: false,
  },
  {
    title: "Team manager",
    images: images[1],
    description: "Win this badge by scoring a perfect score in managing",
    achieved: false,
  },
];

const Mission = () => {
  return (
    <main className={layoutSpacing}>
      <Header {...Managers[0]} />

      <div className="flex flex-col gap-[18px]">
        <Typography variant="h3" className={"text-darkPurple"}>
          Level 1
        </Typography>
        <Badge Badges={Badges} />
      </div>
      <div className="flex flex-col gap-[18px]">
        <Typography variant="h3" className={"text-darkPurple"}>
          Level 2
        </Typography>
        <Badge Badges={Badges} />
      </div>
      <div className="flex flex-col gap-[18px]">
        <Typography variant="h3" className={"text-darkPurple"}>
          Level 3
        </Typography>
        <Badge Badges={UnAchievedBadges} />
      </div>
    </main>
  );
};

export default Mission;
