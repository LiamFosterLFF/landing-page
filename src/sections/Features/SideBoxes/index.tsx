import { Box } from "@mui/material";
import { IconBox, IBox } from "./IconBox";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

const SideBoxes = () => {
  const boxes: IBox[] = [
    {
      icon: <LocalDiningIcon />,
      title: "A single source of truth",
      subtext:
        "When you add work to you Slate calendar we automatically calculate useful insights",
    },
    {
      icon: <EmojiEmotionsIcon />,
      title: "Intuitive interface",
      subtext:
        "When you add work to your Slate calendar we automatically calculate useful insights",
    },
    {
      icon: <AllInclusiveIcon />,
      title: "Or with rules",
      subtext:
        "When you add work to you Slate calendar we automatically calculate useful insights",
    },
  ];
  return (
    <Box>
      {boxes.map((box, ind) => {
        return <IconBox {...box} />;
      })}
    </Box>
  );
};

export default SideBoxes;
