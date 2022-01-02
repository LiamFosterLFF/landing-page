import { Box } from "@mui/material";
export interface IIcon {
  name: string;
}

const Icon = ({ name }: IIcon) => {
  return (
    <Box sx={{ width: "100px" }}>
      <img
        style={{ width: "inherit" }}
        src={`${process.env.PUBLIC_URL}/img/companies/${name}.png`}
        alt={name}
      />
    </Box>
  );
};

export default Icon;
