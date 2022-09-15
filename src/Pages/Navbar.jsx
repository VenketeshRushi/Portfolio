import {
  Box,
  Button,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import styles from "../Styles/navbar.module.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThan700] = useMediaQuery("(max-width: 750px)");

  const handleScroll = (target) => {
    const targetElement = document.getElementById(target);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <Drawer
        placement={"right"}
        onClose={onClose}
        isOpen={isOpen}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent textAlign={"center"} background={"#151418"}>
          <DrawerHeader
            bg="#151418"
            color="white"
            fontSize={"32px"}
            m="0px"
            borderBottomWidth="1px"
          >
            Venketesh Rushi
          </DrawerHeader>
          <DrawerBody display={"flex"} alignItems={"center"} justifyContent={"center"} mt="25px">
            <Stack direction={"column"} spacing={"20px"} alignItems={"center"}>
              <Box
                onClick={() => (
                  onClose(),
                  setTimeout(() => {
                    handleScroll("home");
                    console.log("home");
                  }, 800)
                )}
              >
                <Text color={"white"} fontWeight={"bold"} fontSize={32}>
                  About
                </Text>
              </Box>
              <Box
                onClick={() => (
                  onClose(),
                  setTimeout(() => {
                    handleScroll("skills");
                    console.log("skills");
                  }, 800)
                )}
              >
                <Text color={"white"} fontWeight={"bold"} fontSize={32}>
                  Skills
                </Text>
              </Box>
              <Box
                onClick={() => (
                  onClose(),
                  setTimeout(() => {
                    handleScroll("projects");
                    console.log("projects");
                  }, 800)
                )}
              >
                <Text color={"white"} fontWeight={"bold"} fontSize={32}>
                  Projects
                </Text>
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button
              bg="rgb(108,99,255)"
              color="white"
              variant="outline"
              mr={3}
              onClick={onClose}
              size="lg"
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <nav className={styles.navbar}>
        <Stack alignItems={"center"} direction={"row"} spacing={10}>
          {isSmallerThan700 ? (
            <Button
              className={styles.btn1}
              bg="rgb(108,99,255)"
              onClick={onOpen}
            >
              <HamburgerIcon w={6} h={6} color="white" />
            </Button>
          ) : (
            ""
          )}
          <Box>
            <Text fontSize={24} color="rgb(108,99,255)">
              Venketesh
            </Text>
          </Box>
        </Stack>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          width="45%"
        >
          <div className={styles.navdata} onClick={() => handleScroll("home")}>
            <Text fontSize={20}>About</Text>
          </div>
          <div
            className={styles.navdata}
            onClick={() => handleScroll("skills")}
          >
            <Text fontSize={20}>Skills</Text>
          </div>
          <div
            className={styles.navdata}
            onClick={() => handleScroll("projects")}
          >
            <Text fontSize={20}>Projects</Text>
          </div>

          <Button
            size="sm"
            bg="transparent"
            color="red"
            borderRadius={15}
            border="2px solid red"
            onClick={() => handleScroll("contactMe")}
          >
            Contact Me
          </Button>
        </Box>
      </nav>
    </header>
  );
};

export default Navbar;
