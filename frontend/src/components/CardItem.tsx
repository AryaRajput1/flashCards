import { Badge, Box, Text } from "@chakra-ui/react";

export type CardItemProps = {
  id: string;
  question: string;
  answer: string;
  difficulty: "easy" | "medium" | "hard";
};

export const DIFFICULTY = {
  easy: {
    label: "Easy",
    color: "green",
  },
  medium: {
    label: "Medium",
    color: "orange",
  },
  hard: {
    label: "Hard",
    color: "red",
  },
};

export const CardItem = ({ question, answer, difficulty }: CardItemProps) => {
  return (
    <Box
      perspective="1000px"
      minH={52}
      margin="20px"
      _hover={{ cursor: "pointer" }}
    >
      <Box
        position="relative"
        width="100%"
        height="100%"
        transition="transform 0.6s"
        transformStyle="preserve-3d"
        _hover={{ transform: "rotateY(180deg)" }}
      >
        {/* Front Side */}
        <Box
          position="absolute"
          display={"flex"}
          flexDir={'column-reverse'}
          alignItems={"center"}
          justifyContent={"center"}
          width="100%"
          height="100%"
          backfaceVisibility="hidden"
          bg="gray.800"
          borderRadius="lg"
          boxShadow="lg"
          p="4"
          color="white"
        >
          <Text fontWeight="bold" fontSize="3xl" mb="2">
            {question}
          </Text>
          <Badge colorPalette={DIFFICULTY[difficulty].color}>
            {DIFFICULTY[difficulty].label}
          </Badge>
        </Box>

        {/* Back Side */}
        <Box
          position="absolute"
          width="100%"
          height="100%"
          backfaceVisibility="hidden"
          transform="rotateY(180deg)"
          bg="gray.800"
          borderRadius="lg"
          boxShadow="lg"
          p="4"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
        >
          <Text fontSize="md">{answer}</Text>
        </Box>
      </Box>
    </Box>
  );
};
