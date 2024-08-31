import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
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
    {
      image: "about_1.gif",
      title: "Protect Your Business from Fraud",
      description:
        "Stay secure with tools designed to identify and prevent business fraud. Our advanced algorithms and tools help you detect suspicious activity and mitigate risks before they escalate.",
    },
    {
      image: "about_2.gif",
      title: "Protect Yourself from Targeted Phishing",
      description:
        "Recognize and block sophisticated phishing attempts with cutting-edge technology. We provide detailed reports and continuous monitoring to keep you safe from digital threats.",
    },
    {
      image: "about_3.gif",
      title: "Protect Yourself and Your Business from Online Scams",
      description:
        "Guard your business and personal life from scams. Our platform identifies threats across multiple channels, ensuring that you stay ahead of scammers and keep your assets secure.",
    },
    {
      image: "about_4.gif",
      title: "Protect Yourself from Digital Frauds",
      description:
        "Learn to spot and defend against various forms of digital fraud. We equip you with essential knowledge to fortify your online presence against ever-evolving cyber attacks.",
    },
  ];

  const MotionBox = motion(Box);
  const MotionImage = motion(Image);

  return (
    <>
      <DynamicNavbar />
      <Box
        position="relative"
        minH="100vh"
        py={10}
        px={6}
        bgImage="about_bg.png"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        {/* Semi-transparent Glass Effect Box */}
        <Box
          position="relative"
          maxW="80%"
          mx="auto"
          py={10}
          px={8}
          bg="rgba(255, 255, 255, 0.2)"
          backdropFilter="blur(10px)"
          borderRadius="lg"
          boxShadow="0px 10px 30px rgba(0, 0, 0, 0.3)"
          textAlign="center"
        >
          <VStack spacing={6}>
            <Heading
              as="h1"
              size="2xl"
              mb={6}
              color="white"
              textShadow="2px 3px 8px rgba(0,0,0,0.8)"
              fontWeight="bolder"
            >
              About NETSpoofer
            </Heading>
            <Text
              fontSize="lg"
              mb={6}
              color="whitesmoke"
              fontWeight="bold"
              px={10}
              textShadow="1px 2px 6px black"
            >
              NETSpoofer offers a comprehensive suite of cybersecurity tools in
              one convenient platform, empowering you to safeguard your digital
              presence and ensure robust security across all your online
              activities. Our mission is to equip individuals and organizations
              with essential knowledge and advanced tools to protect their
              digital assets.
            </Text>
            <Button
              colorScheme="teal"
              size="md"
              boxShadow="0px 5px 15px rgba(0, 0, 0, 0.3)"
              onClick={() => router.push("/contact")}
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            >
              Contact Us
            </Button>
          </VStack>

          {/* Content with Descriptive Paragraphs */}
          <VStack spacing={12} py={12} px={6} maxW="90%" mx="auto">
            {content.map((item, index) => (
              <Flex
                key={index}
                direction={
                  index % 2 === 0
                    ? flexDirection
                    : { base: "column", md: "row-reverse" }
                }
                align="center"
                justify="space-between"
                w="full"
                maxW="1200px"
                mb={12}
              >
                {/* Image with Hover Animation */}
                <MotionImage
                  src={item.image}
                  alt={item.title}
                  boxSize={{ base: "250px", md: "350px" }}
                  objectFit="cover"
                  borderRadius="lg"
                  mb={{ base: 4, md: 0 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                  boxShadow="0px 8px 20px rgba(0, 0, 0, 0.5)"
                />

                {/* Text Box with Hover Animation */}
                <MotionBox
                  textAlign={{ base: "center", md: "left" }}
                  w={{ base: "full", md: "60%" }}
                  px={6}
                  whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
                >
                  <Text
                    fontSize="2xl"
                    color="white"
                    textShadow="2px 3px 8px rgba(0,0,0,0.8)"
                    fontWeight="bolder"
                  >
                    {item.title}
                  </Text>
                  <Text
                    fontSize="lg"
                    color="whitesmoke"
                    mt={3}
                    textShadow="1px 2px 4px black"
                  >
                    {item.description}
                  </Text>
                </MotionBox>
              </Flex>
            ))}
          </VStack>
        </Box>
      </Box>
      <DynamicFooter />
    </>
  );
};

export default About;
