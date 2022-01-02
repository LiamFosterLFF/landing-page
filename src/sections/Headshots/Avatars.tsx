import { Avatar, Box } from "@mui/material";

interface IAvatar {
  name: string;
}

const Avatars = () => {
  const avatarData = [{ name: "1" }, { name: "2" }, { name: "3" }];

  return (
    <Box>
      {avatarData.map((avatar) => {
        return (
          <Avatar
            alt={avatar.name}
            src={`${process.env.PUBLIC_URL}/img/avatarPhotos/${avatar.name}.jpg`}
            sx={{ width: 56, height: 56 }}
          />
        );
      })}
    </Box>
  );
};
export default Avatars;
