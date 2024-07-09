import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Spinner,
  Text,
  HStack,
  List,
  ListItem,
  ListIcon,
  Image,
  Center,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";

export default function StartedComponent() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    setLoading(true);
    try {
      const response = await axios.post("/api/nmap", Object.fromEntries(data));
      setResult(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box bg="gray.800" p={8} color="white" rounded="md" w="full">
      <Center>
        <VStack spacing={6} w="full" maxW="container.md">
          <Heading
            as="h2"
            size="3xl"
            fontWeight="300"
            textAlign="center"
            color="brand.500"
          >
            Get Started
          </Heading>
          {result && (
            <Box w="full">
              <Heading as="h3" size="lg" mb={4}>
                Network Stats:
              </Heading>
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </Box>
          )}
          {error && (
            <Box w="full">
              <Heading as="h3" size="lg" color="red.500" mb={4}>
                Error Fetching Network Stats:
              </Heading>
              <Text>{error}</Text>
            </Box>
          )}
          <HStack
            spacing={8}
            mt={8}
            alignItems="flex-start"
            flexDirection={["column", "column", "row"]}
            w="full"
          >
            <Box flex="1" textAlign="center">
              <Image
                src="https://varunamarine.eu/wp-content/uploads/2022/10/cybersecurity.gif"
                alt="Network illustration"
                maxW="500px"
                mx="auto"
              />
            </Box>
            <Box flex="2">
              <Heading as="h3" size="lg" mb={4}>
                What Our Website Can Do:
              </Heading>
              <List spacing={3}>
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
                  <ListItem key={useCase}>
                    <ListIcon as={CheckCircleIcon} color="teal.400" />
                    {useCase}
                  </ListItem>
                ))}
              </List>
            </Box>
          </HStack>
          <Box w="full">
            
          </Box>
        </VStack>
      </Center>
    </Box>
  );
}
