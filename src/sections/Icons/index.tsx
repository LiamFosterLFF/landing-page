import { Box, Typography } from "@mui/material";
import IconList from "./IconList";

const Icons = () => {
  const title = "Partners";
  const subtitle =
    "We focus on ergonomics and meeting you where you work. \n It's only a keystroke away.";
  return (
    <Box>
      <Typography>{title}</Typography>
      <Typography>{subtitle}</Typography>
      <IconList />
    </Box>
  );
};

export default Icons;
