import {
  Box,
  Card as MUICard,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import Button from "../../../components/Button";

export interface ICard {
  title: string;
  subtitle: string;
  price: number;
}

export const Card = (card: ICard) => {
  const btnText = "Order Now";
  const denomination = "$";
  const timePeriod = "Per Month";
  return (
    <MUICard>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {card.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {card.subtitle}
        </Typography>
        <Box>
          <Typography variant="body2">{card.price}</Typography>
          <Typography variant="body2">{denomination}</Typography>
          <Typography variant="body2">{timePeriod}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button text={btnText} />
      </CardActions>
    </MUICard>
  );
};
