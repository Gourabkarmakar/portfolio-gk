// import { Flex, Heading, VStack } from "@chakra-ui/layout";
// import { IconButton, Spacer, useColorMode } from "@chakra-ui/react";
// import { FaGithubAlt, FaInstagram, FaMoon, FaSun, FaTwitter, FaYoutube } from "react-icons/fa";

import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import Hadder from "./components/Hadder";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" color="cyan.400" fontWeight="semibold">
          Karmakar Portfolio
        </Heading>

        <Spacer />

        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound="true"
          onClick={() => {
            window.open("https://instagram.com");
          }}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => {
            window.open("https://github.com");
          }}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaTwitter />}
          isRound="true"
          onClick={() => {
            window.open("https://twiter.com");
          }}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaYoutube />}
          isRound="true"
          onClick={() => {
            window.open("https://youtube.com");
          }}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() => {
            window.open("https://youtube.com");
          }}
        ></IconButton>
        <IconButton
          ml={5}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>

      <Hadder />
      <Social />
      <Profile />
    </VStack>
  );
}

export default App;
