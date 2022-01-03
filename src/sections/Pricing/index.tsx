import { Box, Typography } from "@mui/material";
import Cards from "./Cards";

const Pricing = () => {
  const title = "Pricing";
  const subtitle =
    "Most calendars are designed for teams. \n Slate is designed for freelancers.";
  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="h5">{subtitle}</Typography>
      <Cards />
    </Box>
  );
};

export default Pricing;
