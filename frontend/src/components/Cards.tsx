import { Box, SimpleGrid } from "@chakra-ui/react";
import { CardItem } from "./CardItem";

const Cards = () => {
  const { data: cards, loading, error, errorMessage } = useFetch("/api/cards");
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {errorMessage}</div>;

  if (cards.length === 0) {
    return <Box>No cards available</Box>;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 3, lg: 4, xl: 5 }} p={4}>
      {cards.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
    </SimpleGrid>
  );
};
export default Cards;
