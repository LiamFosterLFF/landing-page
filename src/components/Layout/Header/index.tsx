import { Box } from "@mui/material";
import PageIcon from "./PageIcon";
import Links from "./Links";
import SearchBar from "./SearchBar";
import Button from "../../../components/Button";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "primary.light",
        color: "typography.main",
      }}
    >
      <PageIcon />
      <Links />
      <SearchBar />
      <Button text="Subscribe" />
    </Box>
  );
};

export default Header;
