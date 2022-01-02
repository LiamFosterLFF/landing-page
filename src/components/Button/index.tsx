import { Button as MuiButton } from "@mui/material";

interface IProps {
  text: string;
}

const Button = ({ text }: IProps) => {
  return <MuiButton variant="contained">{text}</MuiButton>;
};

export default Button;
