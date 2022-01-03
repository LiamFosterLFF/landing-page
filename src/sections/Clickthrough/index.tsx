import { Box, Card, CardContent, Typography } from "@mui/material";
import Button from "../../components/Button";

const Clickthrough = () => {
  const title = "OpenType Feature and Variable Fonts";
  const btnText = "Try For Free";
  return (
    <Box>
      <Card>
        <CardContent>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h2">{title}</Typography>
              <Button text={btnText} />
            </Box>
            <Box>
              <img src="#" alt="clickthrough" />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Clickthrough;
