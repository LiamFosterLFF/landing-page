import { Box, Typography } from "@mui/material";

export interface IBox {
  icon: React.ReactNode;
  title: string;
  subtext: string;
}

export const IconBox: React.FC<IBox> = ({ icon, title, subtext }) => {
  return (
    <Box>
      {icon}
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body2">{subtext}</Typography>
    </Box>
  );
};
