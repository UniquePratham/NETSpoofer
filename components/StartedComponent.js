// components/StartedComponent.js
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function StartedComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission, e.g., send data to an API or MongoDB
    console.log(data);
  };

  return (
    <Box bg="gray.800" p={8} color="white" rounded="md" w="full">
      <Heading as="h2" size="xl" mb={6} textAlign="center" color="brand.500">
        Get Started
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl id="name" isInvalid={errors.name}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
            />
          </FormControl>
          <FormControl id="email" isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: "Email is required" })}
            />
          </FormControl>
          <FormControl id="message" isInvalid={errors.message}>
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="lg" w="full">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
