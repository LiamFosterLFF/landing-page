import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

interface IconProps {
  text: string;
  icon: React.ReactNode;
}
const Icon = ({ text, icon }: IconProps) => {
  return (
    <Box>
      <Typography variant="body1">
        {icon}
        {text}
      </Typography>
    </Box>
  );
};

const InfoIcons = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Icon text="123 testing street" icon={<PinDropIcon />} />
      <Icon text="(123) 456-7890" icon={<PhoneAndroidIcon />} />
      <Icon text="notanemail@fakeemail.com" icon={<EmailIcon />} />
    </Box>
  );
};

export default InfoIcons;
