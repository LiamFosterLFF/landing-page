import { Box, Typography } from "@mui/material";

interface IconProps {
  text: string;
  icon: React.ReactNode;
}
const InfoIcon = ({ text, icon }: IconProps) => {
  return (
    <Box>
      <Typography variant="body1">
        {icon}
        {text}
      </Typography>
    </Box>
  );
};

export default InfoIcon;
