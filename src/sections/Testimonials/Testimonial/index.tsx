import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

export interface ITestimonial {
  name: string;
  profession: string;
  img: string;
  text: string;
}

export const Testimonial = (t: ITestimonial) => {
  return (
    <Card key={t.name} sx={{ width: "300px" }}>
      <CardContent>
        <Box sx={{ display: "flex" }}>
          <Avatar
            alt={t.img}
            src={`${process.env.PUBLIC_URL}/img/avatarPhotos/${t.img}.jpg`}
            sx={{ width: 56, height: 56 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body2">{t.name}</Typography>
            <Typography variant="body2">{t.profession}</Typography>
          </Box>
        </Box>
        <Typography variant="body2">{t.text}</Typography>
      </CardContent>
    </Card>
  );
};
