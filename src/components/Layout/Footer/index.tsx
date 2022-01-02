import { Box } from "@mui/material";
import Links from "./Links";
import Map from "./Map";
import Contacts from "./Contacts";
const Footer = () => {
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}
    >
      <Links />
      <Map />
      <Contacts />
    </Box>
  );
};

export default Footer;
