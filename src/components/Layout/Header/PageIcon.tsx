import { Box } from "@mui/material";

const PageIcon = () => {
  return (
    <Box
      sx={{
        width: "150px",
        height: "100px",
        background: `url(${
          process.env.PUBLIC_URL + "/img/logos/logo-dark.png"
        })`,
        backgroundSize: "cover",
      }}
    />
  );
};

export default PageIcon;
