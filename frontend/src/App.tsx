import { Box, Button, Container, HStack, VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

const App = () => {
  return (
    <Box>
      <Container maxW="container.xl" p={0}>
        <Navbar/>
        <Cards/>
      </Container>
    </Box>
  );
};
export default App;
