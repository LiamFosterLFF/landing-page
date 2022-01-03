import { Paper, TextField, Typography } from "@mui/material";
import Button from "../../../components/Button";

const ContactCard = () => {
  const title = "Contact";
  const inputs = [
    { label: "Your Name" },
    { label: "Your Email" },
    { label: "Your Message" },
  ];
  const btnText = "Send";

  return (
    <Paper
      elevation={1}
      sx={{ width: "600px", display: "flex", flexDirection: "column" }}
    >
      <Typography>{title}</Typography>
      {inputs.map((input, ind) => {
        return (
          <TextField
            key={ind}
            id="outlined-basic"
            label={input.label}
            variant="outlined"
          />
        );
      })}
      <Button text={btnText} />
    </Paper>
  );
};

export default ContactCard;
