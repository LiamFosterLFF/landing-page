import { Box, Typography } from "@mui/material";
import Link from "../../../components/Link";

const Links = () => {
  const linkTexts = ["Home", "Product", "Pricing", "About", "Contact"];

  return (
    <Box>
      <Typography variant="h5">Pages</Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {linkTexts.map((linkText) => (
          <Link name={linkText} />
        ))}
      </Box>
    </Box>
  );
};

export default Links;
