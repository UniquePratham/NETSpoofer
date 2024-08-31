// pages/contact.js
import {
  Box,
  Heading,
  Text,
  VStack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
// Dynamically import components with ssl=true
const DynamicNavbar = dynamic(() => import("@/components/Navbar"), {
  ssl: true,
});
const DynamicFooter = dynamic(() => import("@/components/Footer"), {
  ssl: true,
});

const Contact = () => {
  return (
    <>
    <DynamicNavbar />
    <Box textAlign="center" py={10} px={6}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>
          Contact Us
        </Heading>
        <Text fontSize="xl" mb={4}>
          We would love to hear from you! Please fill out the form below to get
          in touch with us.
        </Text>
        <Input placeholder="Your Name" size="md" />
        <Input placeholder="Your Email" size="md" type="email" />
        <Textarea placeholder="Your Message" size="md" />
        <Button colorScheme="teal" size="md">
          Send Message
        </Button>
      </VStack>
    </Box>
    <DynamicFooter />
    </>
  );
};

export default Contact;
