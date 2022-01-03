import { Box, Typography } from "@mui/material";
import ContactCard from "./ContactCard";
import Contacts from "../../components/Contacts";

const Contact = () => {
  const title = "Contact Us";
  const subtitle =
    "Most calendars are designed for teams \n Slate is designed for freelancers.";
  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="h5">{subtitle}</Typography>
      <Box sx={{ display: "flex" }}>
        <ContactCard />
        <Contacts />
      </Box>
    </Box>
  );
};

export default Contact;
