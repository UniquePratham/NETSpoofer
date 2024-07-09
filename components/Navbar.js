// components/Navbar.js
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useEffect, useState } from "react";

const Links = ["Home", "About", "Contact"];

const NavLink = ({ children }) => (
  <NextLink href={`#${children.toLowerCase()}`} passHref>
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "gray.700",
      }}
    >
      {children}
    </Link>
  </NextLink>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return null on initial render to avoid mismatch between server and client
    return null;
  }

  return (
    <Box bg="gray.900" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <NextLink href="/" passHref>
            <Link>
              <Image src="/logo.png" alt="Logo" width="150px" height="auto" />
            </Link>
          </NextLink>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Tools
              </MenuButton>
              <MenuList>
                <MenuItem as={NextLink} href="#port-scanner">
                  Port Scanner
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <NextLink href="#get-started" passHref>
            <Link
              px={4}
              py={2}
              color="black"
              rounded={"md"}
              bg="teal.400"
              _hover={{ bg: "teal.300" }}
            >
              Get Started
            </Link>
          </NextLink>
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Tools
              </MenuButton>
              <MenuList>
                <MenuItem as={NextLink} href="#port-scanner">
                  Port Scanner
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
