import { Box } from "@mui/material";
import IconBox from "./IconBox";
import { IBox } from "../Ibox";
import EmailIcon from "@mui/icons-material/Email";

const SideBoxes = () => {
  const boxes: IBox[] = [
    {
      icon: <EmailIcon />,
      title: "A single source of truth",
      subtext:
        "When you add work to you Slate calendar we automatically calculate useful insights",
    },
    {
      icon: <EmailIcon />,
      title: "Intuitive interface",
      subtext:
        "When you add work to your Slate calendar we automatically calculate useful insights",
    },
    {
      icon: <EmailIcon />,
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
