// pages/about.js
import { Box, Heading, Text, VStack, Button, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import components
const DynamicNavbar = dynamic(() => import("@/components/Navbar"), {
  ssr: true,
});
const DynamicFooter = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

const About = () => {
  const router = useRouter();
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });

  const content = [
    { image: "about_1.gif", text: "Protect Your Business from Fraud"},
    { image: "about_2.gif", text: "Protect Yourself from Targeted Phishing" },
    { image: "about_3.gif", text: "Protect Yourself and Your Business from Online Scams" },
    { image: "about_4.gif", text: "Protect Yourself from Digital Frauds" },
  ];

  const MotionBox = motion(Box);
  const MotionImage = motion(Image);

  return (
    <>
      <DynamicNavbar />
      <Box textAlign="center" py={10} px={6} bgImage="about_bg.png" bgRepeat="no-repeat" bgSize="cover">
        <VStack spacing={4}>
          <Heading as="h1" size="2xl" mb={4} color="white" textShadow="2px 3px 4px grey" fontWeight="bolder">
            About NETSpoofer
          </Heading>
          <Text fontSize="md" mb={4} color="whitesmoke" fontWeight="bold" px={10} mx={20}>
          NETSpoofer offers a comprehensive suite of cybersecurity tools in one convenient platform, empowering you to safeguard your digital presence and ensure robust security across all your online activities.

          Our mission is to empower individuals and organizations by equipping them with the essential knowledge and advanced tools needed to protect their digital assets, ensuring they stay safe and secure in the ever-evolving online landscape.
          </Text>
          <Button
            colorScheme="teal"
            size="md"
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </Button>
        </VStack>
        <VStack spacing={5} py={5}>
        {content.map((item, index) => (
          <Flex
            key={index}
            direction={index % 2 === 0 ? flexDirection : { base: "column", md: "row-reverse" }}
            align="center"
            justify="center"
            w="full"
            px={6}
            mb={6}
          >
            <MotionImage
              src={item.image}
              alt={item.text}
              boxSize="300px"
              objectFit="cover"
              borderRadius="md"
              mb={{ base: 4, md: 0 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <MotionBox
              textAlign={{ base: "center", md: "left" }}
              w={{ base: "full", md: "60%" }}
              px={4}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Text fontSize="xl" color="white" textShadow="2px 3px 4px grey" fontWeight="bolder">
                {item.text}
              </Text>
            </MotionBox>
          </Flex>
        ))}
      </VStack>
      </Box>

      <DynamicFooter />
    </>
  );
};

export default About;
