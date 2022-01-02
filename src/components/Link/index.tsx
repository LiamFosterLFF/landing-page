import { Link as MuiLink } from "@mui/material";

interface IProps {
  name: string;
}

const Link: React.FC<IProps> = ({ name }) => {
  return <MuiLink href={name}>{name}</MuiLink>;
};

export default Link;
