import { Card, Text } from "@chakra-ui/react";

type CardItemProps = {
  question: string;
  answer: string;
  difficulty: "easy" | "medium" | "hard";
};

export const CardItem = ({ question, answer, difficulty }: CardItemProps) => {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>{question}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Text fontSize="md" color="gray.700">
          {answer}
        </Text>
        <Text fontSize="sm" color="gray.500" mt={2}>
          Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </Text>
      </Card.Body>
      <Card.Footer>
        <Text fontSize="sm" color="gray.500">
          {new Date().toLocaleDateString()}
        </Text>
      </Card.Footer>
    </Card.Root>
  );
};
