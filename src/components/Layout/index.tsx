import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";

const Layout: React.FC = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
