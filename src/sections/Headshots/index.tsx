import { Box, Typography } from "@mui/material";
import Avatars from "./Avatars";

const Headshots = () => {
  const title = "About us";
  return (
    <Box>
      <Typography>{title}</Typography>
      <Avatars />
    </Box>
  );
};

export default Headshots;
