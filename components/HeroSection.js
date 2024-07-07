// components/HeroSection.js
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import NextLink from "next/link";

export default function HeroSection() {
  const getStartedRef = useRef(null);

  const scrollToGetStarted = () => {
    getStartedRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#get-started") {
      scrollToGetStarted();
    }
  }, []);

  return (
    <>
      <Box
        w="100%"
        h="100vh"
        bg="gray.900"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        flexDirection="column"
      >
        <Heading as="h1" size="2xl" mb={4} color="teal.300">
          Custom Software Solutions
        </Heading>
        <Text fontSize="xl" mb={8}>
          Unlock the full potential of your business with tailored software
          solutions.
        </Text>
        <Button colorScheme="teal" size="lg" onClick={scrollToGetStarted}>
          Get Started
        </Button>
      </Box>
      <Box
        ref={getStartedRef}
        id="get-started"
        w="100%"
        h="50vh"
        bg="gray.800"
        color="white"
        p={8}
      >
        <VStack spacing={4}>
          <Heading as="h2" size="xl">
            Get Started
          </Heading>
          <Text>
            Here is where you can provide detailed information or forms to get
            started.
          </Text>
        </VStack>
      </Box>
    </>
  );
}
