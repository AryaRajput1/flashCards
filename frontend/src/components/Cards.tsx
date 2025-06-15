import { Box, SimpleGrid } from "@chakra-ui/react";
import { CardItem, type CardItemProps } from "./CardItem";
import { useFetch } from "@/hooks/useFetch.ts";
import { axiosWrapper } from "@/config/axiosWrapper";

const Cards = () => {
  const {
    data: cards,
    loading,
    error,
    errorMessage,
  } = useFetch<CardItemProps[]>(axiosWrapper.get("/api/v1/flashcard"));
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {errorMessage}</div>;

  if (!cards || cards.length === 0) {
    return <Box>No cards available</Box>;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 3, lg: 4, xl: 5 }} p={4} gap={4}>
      {cards.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
    </SimpleGrid>
  );
};
export default Cards;
