import { Box, Typography } from "@mui/material";
import Button from "../../components/Button";
import ImageGroup from "./ImageGroup";

const Gallery = () => {
  const title = "Gallery";
  const subtitle =
    "We focus on ergonomics and meeting you where you work. It's only a keystroke away.";
  const btnText = "See more";
  return (
    <Box>
      <Typography>{title}</Typography>
      <Typography>{subtitle}</Typography>
      <ImageGroup />
      <Button text={btnText} />
    </Box>
  );
};

export default Gallery;
