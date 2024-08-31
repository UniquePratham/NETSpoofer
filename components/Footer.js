import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Link,
  VisuallyHidden,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import NextLink from "next/link";
import { useEffect, useState } from "react";

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <Link>
        <Image src="/logo.png" alt="Logo" width="150px" height="auto" />
      </Link>
    </NextLink>
  );
};

const SocialButton = ({ children, label, href }) => {
  const bg = useColorModeValue("blackAlpha.100", "whiteAlpha.100");
  const hoverBg = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const hoverColor = useColorModeValue("teal.400", "teal.300");

  return (
    <chakra.button
      bg={bg}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease, transform 0.3s ease"}
      _hover={{
        bg: hoverBg,
        color: hoverColor,
        transform: "scale(1.2)",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const bg = useColorModeValue("gray.900", "gray.900");
  const usedcolor = useColorModeValue("gray.200", "gray.200");
  const hoverLinkColor = useColorModeValue("teal.400", "teal.300");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Box bg={bg} color={usedcolor}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Heading size="md" mb={2}>
              Quick Links
            </Heading>
            <Link
              href={"/"}
              _hover={{ color: hoverLinkColor, textDecoration: "underline" }}
            >
              Home
            </Link>
            <Link
              href={"/about"}
              _hover={{ color: hoverLinkColor, textDecoration: "underline" }}
            >
              About
            </Link>
            <Link
              href={"/services"}
              _hover={{ color: hoverLinkColor, textDecoration: "underline" }}
            >
              Services
            </Link>
            <Link
              href={"/contact"}
              _hover={{ color: hoverLinkColor, textDecoration: "underline" }}
            >
              Contact
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading size="md" mb={2}>
              Company
            </Heading>
            <Link
              href={"https://acns.vercel.app/#About"}
              _hover={{ color: hoverLinkColor, textDecoration: "underline" }}
            >
              About us
            </Link>
            <Link
              href={"https://acns.vercel.app/#Services"}
              _hover={{ color: hoverLinkColor, textDecoration: "underline" }}
            >
              Our Services
            </Link>
            <Link
              href={"https://acns.vercel.app/#Contact"}
              _hover={{ color: hoverLinkColor, textDecoration: "underline" }}
            >
              Contact
            </Link>
            <Link
              href={"https://acns.vercel.app/#About"}
              _hover={{ color: hoverLinkColor, textDecoration: "underline" }}
            >
              Privacy Policy
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading size="md" mb={2}>
              Contact Us
            </Heading>
            <Text>Email: acodernamedsubhro@gmail.com</Text>
            <Text>Address: SaltLake Kolkata, India</Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading size="md" mb={2}>
              Follow Us
            </Heading>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"https://twitter.com"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={"YouTube"}
                href={
                  "https://www.youtube.com/channel/UC7M2V6WGxompzcrD2vXfybw"
                }
              >
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={"https://www.instagram.com/subhro1530/"}
              >
                <FaInstagram />
              </SocialButton>
              <SocialButton
                label={"LinkedIn"}
                href={"https://www.linkedin.com/in/shaswata-saha-74b209251"}
              >
                <FaLinkedin />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box py={10}>
        <Container
          as={Stack}
          maxW={"6xl"}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Logo />
          <Text>© 2024 ACNS. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"https://twitter.com"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label={"YouTube"}
              href={
                "https://www.youtube.com/channel/UC7M2V6WGxompzcrD2vXfybw"
              }
            >
              <FaYoutube />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/subhro1530/"}
            >
              <FaInstagram />
            </SocialButton>
            <SocialButton
              label={"LinkedIn"}
              href={"https://www.linkedin.com/in/shaswata-saha-74b209251"}
            >
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
