import { Box } from "@mui/material";
import { Card, ICard } from "./Card";

const Cards = () => {
  const cards: ICard[] = [
    { title: "Free", subtitle: "Organize across all apps by hand", price: 0 },
    {
      title: "Standard",
      subtitle: "Organize across all apps by hand",
      price: 10,
    },
    {
      title: "Business",
      subtitle: "Organize across all apps by hand",
      price: 99,
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      {cards.map((card: ICard, ind: number) => {
        return <Card key={ind} {...card} />;
      })}
    </Box>
  );
};

export default Cards;
