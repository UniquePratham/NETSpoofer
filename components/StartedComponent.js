// components/StartedComponent.js
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  HStack,
  List,
  ListItem,
  ListIcon,
  Image,
  Center,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function StartedComponent() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let domain = data.get("domain");

    // Process the domain input
    if (domain.startsWith("https://")) {
      domain = domain.replace("https://", "");
    } else if (!domain.startsWith("www.")) {
      domain = domain;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post("/api/checkDomain", { domain });
      setResult(response.data);
    } catch (error) {
      setError("Failed to check domain. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const borderColor = useColorModeValue("blue.500", "blue.300");

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <Box bg="gray.800" p={8} color="white" rounded="md" w="full">
      <Center>
        <VStack spacing={6} w="full" maxW="container.lg">
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            w="full"
          >
            <Heading
              as="h2"
              size="3xl"
              fontWeight="300"
              textAlign="center"
              color="brand.500"
            >
              Get Started
            </Heading>
          </MotionBox>
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            w="full"
          >
            <HStack
              spacing={8}
              mt={8}
              alignItems="flex-start"
              flexDirection={["column", "column", "row"]}
              justifyContent="space-between"
              w="full"
            >
              <Box flex="1" textAlign="center">
                <Image
                  src="cybersecurity.gif"
                  alt="Network illustration"
                  maxW={{ base: "300px", md: "500px" }}
                  mx="auto"
                />
              </Box>
              <Box flex="2" ml={[0, 0, 4]} textAlign={{base:"center",md:"unset"}}>
                <Heading as="h3" size={{base:"xl",md:"lg"}} mt={8} mb={4}>
                  What Our Website Can Do:
                </Heading>
                <List spacing={10}>
                  <SimpleGrid columns={[1, 2]} spacing={4}>
                    {[
                      "Detect Unauthorized Access",
                      "Optimize Network Performance",
                      "Manage Bandwidth Usage",
                      "Troubleshoot Connectivity Issues",
                      "Ensure Regulatory Compliance",
                      "Plan Network Capacity",
                      "Analyze Traffic Patterns",
                      "Identify Malware and Threats",
                      "Monitor Application Performance",
                      "Audit Network Activity",
                      "Enforce Network Policies",
                      "Assess Network Latency",
                    ].map((useCase) => (
                      <ListItem key={useCase} display="flex" alignItems="center">
                        <ListIcon as={CheckCircleIcon} color="teal.400" />
                        {useCase}
                      </ListItem>
                    ))}
                  </SimpleGrid>
                </List>
              </Box>
            </HStack>
          </MotionBox>
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            w="full"
          >
            <Text color="gray.400" textAlign="center" mt={8}>
              Check if a domain exists or is free to use, and get its IP address
              and location.
            </Text>
          </MotionBox>
          <MotionBox
            as="form"
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            mt={8}
            p={4}
            bg="gray.700"
            borderRadius="md"
            textAlign="center"
            w="full"
          >
            <FormControl id="domain" mb={4}>
              <FormLabel>Domain</FormLabel>
              <Input
                type="text"
                placeholder="Enter Domain"
                name="domain"
                required
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              w="full"
              isLoading={loading}
              loadingText="Checking"
            >
              Check Domain
            </Button>
          </MotionBox>
          {result && (
            <MotionBox
              w="full"
              mt={8}
              p={4}
              border="2px"
              borderColor={borderColor}
              borderRadius="md"
              bg="gray.700"
              textAlign="center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Heading as="h3" size="lg" mb={4}>
                Domain Information:
              </Heading>
              {result.ip ? (
                <>
                  <Text>IP Address: {result.ip}</Text>
                  <Text>Country: {result.location.country}</Text>
                  <Text>Region: {result.location.region}</Text>
                  <Text>Timezone: {result.location.timezone}</Text>
                </>
              ) : (
                <Text color="green.500">The domain is free to use.</Text>
              )}
            </MotionBox>
          )}
          {error && (
            <MotionBox
              w="full"
              mt={8}
              p={4}
              border="2px"
              borderColor="red.500"
              borderRadius="md"
              bg="gray.700"
              textAlign="center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Heading as="h3" size="lg" color="red.500" mb={4}>
                Error:
              </Heading>
              <Text>{error}</Text>
            </MotionBox>
          )}
        </VStack>
      </Center>
    </Box>
  );
}
