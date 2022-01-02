import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import InfoIcon from "./InfoIcon";

const InfoIcons = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <InfoIcon text="123 testing street" icon={<PinDropIcon />} />
      <InfoIcon text="(123) 456-7890" icon={<PhoneAndroidIcon />} />
      <InfoIcon text="notanemail@fakeemail.com" icon={<EmailIcon />} />
    </Box>
  );
};

export default InfoIcons;
