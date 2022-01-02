import { Box } from "@mui/material";

const PageIcon = () => {
  return (
    <Box
      sx={{
        width: "186px",
        height: "78px",
        background: `url(${process.env.PUBLIC_URL + "/img/logo-dark.png"})`,
        backgroundSize: "cover",
      }}
    />
  );
};

export default PageIcon;
