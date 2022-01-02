import { Box, Typography } from "@mui/material";
import { IBox } from "../Ibox";
const IconBox: React.FC<IBox> = ({ icon, title, subtext }) => {
  return (
    <Box>
      {icon}
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body2">{subtext}</Typography>
    </Box>
  );
};
export default IconBox;
