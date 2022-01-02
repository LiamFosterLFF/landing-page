import { Box, Typography } from "@mui/material";
import Image from "./Image";
import SideBoxes from "./SideBoxes";

const Features = () => {
  const title = "Features";
  const subtitle =
    "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.";

  return (
    <Box>
      <Typography>{title}</Typography>
      <Typography>{subtitle}</Typography>
      <Box>
        <Image />
        <SideBoxes />
      </Box>
    </Box>
  );
};

export default Features;
