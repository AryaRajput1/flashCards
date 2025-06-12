import { Box, Button, Dialog, Flex, List, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { LuCross, LuMoon, LuPencil, LuSun, LuX } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Flex
        as="nav"
        bg="gray.800"
        color="white"
        p={4}
        justifyContent="space-between"
      >
        <Box>
          <Text fontWeight={"bold"} fontSize={"xl"}>
            Flash Cards
          </Text>
        </Box>
        <Box>
          <List.Root
            listStyleType={"none"}
            display={"flex"}
            flexDirection={"row"}
            gap={4}
          >
            <List.Item>
              <Button
                variant={"ghost"}
                _hover={{ backgroundColor: "black" }}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? <LuSun color="white" /> : <LuMoon />}
              </Button>
            </List.Item>
            <List.Item>
              <Dialog.Root>
                <Dialog.Trigger>
                  <Button
                    variant={"ghost"}
                    _hover={{ backgroundColor: "black" }}
                  >
                    <LuPencil color="white" />
                  </Button>
                </Dialog.Trigger>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content>
                    <Dialog.CloseTrigger>
                      <LuX />
                    </Dialog.CloseTrigger>
                    <Dialog.Header>
                      <Dialog.Title>Add New FlashCard</Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Body></Dialog.Body>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Dialog.Root>
            </List.Item>
          </List.Root>
        </Box>
      </Flex>
    </Box>
  );
};
export default Navbar;
