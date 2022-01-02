import { Box, Container, Typography } from "@mui/material";
import Button from "../../components/Button";

const Hero = () => {
  const titleText = "Work at the speed of Thought";
  const subtitleText =
    "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.";

  const primaryButtonText = "Learn more";
  const secondaryButtonText = "Try for free";
  return (
    <Container>
      <Typography variant="h2">{titleText}</Typography>
      <Typography variant="h4">{subtitleText} </Typography>
      <Button text={secondaryButtonText} />
      <Button text={primaryButtonText} />
      <Box sx={{ background: `url(${1})` }} />
    </Container>
  );
};

export default Hero;
