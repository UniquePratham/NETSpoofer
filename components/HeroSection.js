import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

export default function HeroSection() {
  const getStartedRef = useRef(null);

  const scrollToGetStarted = () => {
    if (getStartedRef.current) {
      getStartedRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#get-started") {
      scrollToGetStarted();
    }
  }, []);

  return (
    <ParallaxProvider>
      <Box position="relative" overflow="hidden">
        <ParallaxBanner
          layers={[
            {
              image: "hero_bg.jpg",
              amount: 0.3,
            },
            {
              children: (
                <Box
                  w="100%"
                  h="100%"
                  bg="rgba(0,0,0,0.2)" // Adjust overlay opacity as needed
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  flexDirection="column"
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  zIndex="1" // Ensures text is above the background image
                  px={4}
                >
                  <Heading
                    as="h1"
                    size="3xl"
                    mb={4}
                    color="#0a121c"
                    style={{
                      transform: "translateY(10%)",
                      transition: "transform 0.3s",
                    }}
                  >
                    NETSpoofer Provides
                  </Heading>
                  <Text
                    fontSize="xl"
                    mb={8}
                    color="#1c334b"
                    style={{
                      transform: "translateY(20%)",
                      transition: "transform 0.3s",
                    }}
                  >
                    Different Cybersecurity tools at One Place
                  </Text>
                  <Button
                    color="#0a121c"
                    size="lg"
                    onClick={scrollToGetStarted}
                    style={{
                      transform: "translateY(30%)",
                      transition: "transform 0.3s",
                    }}
                  >
                    Get Started
                  </Button>
                </Box>
              ),
              amount: 0.5,
            },
          ]}
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
            color: "white",
          }}
        />
      </Box>
    </ParallaxProvider>
  );
}
