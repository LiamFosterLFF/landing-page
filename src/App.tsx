import { Box } from "@mui/material";

//Component Imports
import Layout from "./components/Layout";

// Section Imports
import Clickthrough from "./sections/Clickthrough";
import Contact from "./sections/Contact";
import Features from "./sections/Features";
import Gallery from "./sections/Gallery";
import Headshots from "./sections/Headshots";
import Hero from "./sections/Hero";
import Icons from "./sections/Icons";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <Box className="App" sx={{ width: "100%", height: "100%" }}>
      <Layout>
        <Clickthrough />
        <Contact />
        <Features />
        <Gallery />
        <Headshots />
        <Hero />
        <Icons />
        <Pricing />
        <Testimonials />
      </Layout>
    </Box>
  );
};

export default App;
