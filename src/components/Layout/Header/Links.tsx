import { Box } from "@mui/material";
import Link from "../../Link";

const Links = () => {
  const linkTexts = ["Home", "Product", "Pricing", "About", "Contact"];
  return (
    <Box sx={{ display: "flex" }}>
      {linkTexts.map((linkText) => (
        <Link name={linkText} />
      ))}
    </Box>
  );
};

export default Links;
