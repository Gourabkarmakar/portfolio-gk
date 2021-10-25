import { Box, Flex, Heading, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import {DiAndroid, DiPython, DiWebplatform, } from "react-icons/di"


export default function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
      justifyItems="stretch"
    >
      <Box alignSelf="center" px="23" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          1.5+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      
      <Box alignSelf="center" px="32" py="16">
        
        <Text fontWeight="bold" fontSize="xl">
          Product Design And Develop By Gourab Karamakar, Also Compatiable with
          Mobile Devices
        </Text>
        <Flex direction={isNotSmallerScreen? "row": "column"} mt={8}>
            <Flex bg="yellow.800" h="30vh" w='30vh' justify="flex-end" mt={4} direction="column" rounded="xl" _hover={{ bg: "green.400", }} >
                <Icon color="white" p="4" as={DiAndroid} w="24" h="24"/>
                <Text ml={4}>
                    Android App
                </Text>
            </Flex>
            
            <Flex bg="yellow.800" h="30vh" w='30vh' justify="flex-end" mt={4} ml ={isNotSmallerScreen? 4 : 0} direction="column" rounded="xl" _hover={{ bg: "green.400", }}>
                <Icon color="white" p="4" as={DiPython} w="24" h="24"/>
                <Text ml={4}>
                    Python App
                </Text>
            </Flex>
                        
            <Flex bg="yellow.800" h="30vh" w='30vh' justify="flex-end" mt={4} ml ={isNotSmallerScreen? 4 : 0} direction="column" rounded="xl" _hover={{ bg: "green.400", }}>
                <Icon  p="4" as={DiWebplatform} w="20" h="20"/>
                <Text ml={4}>
                    Web App
                </Text>
            </Flex>



        </Flex>

      </Box>
    </Flex>
  );
}
