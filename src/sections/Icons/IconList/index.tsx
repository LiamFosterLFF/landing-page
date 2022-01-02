import { Box } from "@mui/material";
import Icon from "./Icon";
import { IIcon } from "./Icon";

const IconList = () => {
  const icons: IIcon[] = [
    { name: "airbnb" },
    { name: "android" },
    { name: "apple-store" },
    { name: "docker" },
    { name: "ibm" },
    { name: "kubernetes" },
    { name: "terraform" },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      {icons.map((icon: IIcon, ind: number) => {
        return <Icon key={ind} {...icon} />;
      })}
    </Box>
  );
};

export default IconList;
