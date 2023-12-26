import { layoutSpacing } from "@/app/utils/classes";
import { Typography } from "@mui/material";
import Repos from "./Repos";

const Setup = () => {
  return (
    <main className={layoutSpacing}>
      <Typography variant="h2" className="text-darkPurple">
        Configure Project
      </Typography>

      <Repos />
    </main>
  );
};

export default Setup;
