import { Box } from "@mui/material";

export const SpacingBox: React.FC = ({ children }) => {
  return (
    <Box sx={{ width: "100%", height: "100%", padding: "0 10%" }}>
      {children}
    </Box>
  );
};
