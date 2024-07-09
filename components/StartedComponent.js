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
    const domain = data.get("domain");
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
          <Text color="gray.400" textAlign="center">
            Check if a domain exists or is free to use, and get its IP address
            and location.
          </Text>
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
              {result && (
                <Box w="full" mt={4}>
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
                </Box>
              )}
              {error && (
                <Box w="full" mt={4}>
                  <Heading as="h3" size="lg" color="red.500" mb={4}>
                    Error:
                  </Heading>
                  <Text>{error}</Text>
                </Box>
              )}
              <Heading as="h3" size="lg" mt={8} mb={4}>
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
        </VStack>
      </Center>
      <Box
        as="form"
        onSubmit={handleSubmit}
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
      </Box>
    </Box>
  );
}
