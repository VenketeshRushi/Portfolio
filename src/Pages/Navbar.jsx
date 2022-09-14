import { Box, Button, Text } from "@chakra-ui/react";
import styles from "../Styles/navbar.module.css";

const Navbar = () => {

  const handleScroll = (target) => {
    const targetElement = document.getElementById(target);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <Box>
          <Text fontSize={24} color="#3e4bff">
            Venketesh
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          width="45%"
        >
          <Box onClick={() => handleScroll("home")}>
            <Text fontSize={20}>About</Text>
          </Box>
          <Box onClick={() => handleScroll("skills")}>
            <Text fontSize={20}>Skills</Text>
          </Box>
          <Box onClick={() => handleScroll("projects")}>
            <Text fontSize={20}>Projects</Text>
          </Box>
          <Button
            size="sm"
            bg="transparent"
            color="red"
            borderRadius={15}
            border="2px solid red"
          >
            Contact Me
          </Button>
        </Box>
      </nav>
    </header>
  );
};

export default Navbar;
