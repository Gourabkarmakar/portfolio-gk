import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Stack,
  Text,
  useColorMode,
  
} from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from '@chakra-ui/media-query';


function Hadder() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");

  return (
    
      <Stack>
        <Circle
          position="absolute"
          bg={isDark ? "blue.100": "blue.800"}
          opacity="0.1"
          w="300px"
          h="300px"
          alignSelf="flex-end"
          zIndex={1}
          
        />

        <Flex
          direction={isNotSmallerScreen ? 'row': 'column'}
          spacing="200px"
          p={isNotSmallerScreen ? "32" : "0"}
          alignSelf="flex-start"
        >
          <Box mt={isNotSmallerScreen ? "0" :16} align="flex-start">
            <Text fontSize="5xl" fontWeight="semibold">
              Hi, I am
            </Text>
            <Text
              fontSize="7xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
              bgClip="text"
            >
              Gourab Karmakar
            </Text>
            <Text color={isDark ? "gray.300" : "gray.500"}>
              Website Developer & Application Developer , Python Programmer and Founder of Gksec and Gourab karmakar YT Channel
            </Text>

            <Button
              mt={8}
              colorScheme="blue"
              onClick={() => 
                window.open("gksec.gk")
              }
            >
              Hire Me
            </Button>
          </Box>
          <Image
            alignSelf="center"
            mt={isNotSmallerScreen ? "0" : "12"}
            mb={isNotSmallerScreen ? "0" : "12"}
            boxShadow="lg"
            borderRadius="full"
            backgroundColor="transparent"
            boxSize="300px"
            src="https://avatars.githubusercontent.com/u/64173204?v=4"
            alt="Image Section"
            zIndex={2}
          />
          
        </Flex>
      </Stack>
  );
}

export default Hadder;
