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
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import NextLink from "next/link";
import { useEffect, useState, useRef } from "react";

const Links = ["Home", "About", "Contact"];

const NavLink = ({ children }) => (
  <NextLink href={`/${(children.toLowerCase()=="home")?"":children.toLowerCase()}`} passHref>
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
  const portScannerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return null on initial render to avoid mismatch between server and client
    return null;
  }

  const scrollToPortScanner = () => {
    if (portScannerRef.current) {
      portScannerRef.current.scrollIntoView({ behavior: "smooth" });
      onClose(); // Close the mobile menu after navigation
    }
  };

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
              <MenuButton
                as={Button}
                rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                onClick={isOpen ? onClose : onOpen}
                _active={{
                  bg: "white",
                  color: "teal.400",
                  fontWeight: "bolder",
                }}
                _hover={{
                  opacity: "0.9",
                  transform: "scale(1.01)",
                  boxShadow: "1px 2px 3px grey",
                }}
                transition="all 0.2s ease-in-out"
              >
                Tools
              </MenuButton>
              <MenuList p="3px">
                <Link as="a" href="/nmap" bg="black">
                  <MenuItem
                    onClick={() => {
                      scrollToPortScanner;
                      onClose; // Close the mobile menu
                    }}
                    bg="teal.400"
                    border="1px solid black"
                    m="1px"
                    color="black"
                    _hover={{
                      bg: "black",
                      color: "teal.400",
                      textShadow: "1px 1px 1px 1px grey",
                      transform: "scale(1.05)",
                      boxShadow: "2px 3px 4px grey",
                    }}
                    transition="transform 0.3s ease-in-out"
                  >
                    Port Scanner
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      scrollToPortScanner;
                      onClose; // Close the mobile menu
                    }}
                    bg="teal.400"
                    border="1px solid black"
                    m="1px"
                    color="black"
                    _hover={{
                      bg: "black",
                      color: "teal.400",
                      textShadow: "1px 1px 1px 1px grey",
                      transform: "scale(1.05)",
                      boxShadow: "2px 3px 4px grey",
                    }}
                    transition="transform 0.3s ease-in-out"
                  >
                    Interceptor
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      scrollToPortScanner;
                      onClose; // Close the mobile menu
                    }}
                    bg="teal.400"
                    border="1px solid black"
                    m="1px"
                    color="black"
                    _hover={{
                      bg: "black",
                      color: "teal.400",
                      textShadow: "1px 1px 1px 1px grey",
                      transform: "scale(1.05)",
                      boxShadow: "2px 3px 4px grey",
                    }}
                    transition="transform 0.3s ease-in-out"
                  >
                    SQL Injector
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <NextLink href="#get-started" passHref>
            <Link
              px={4}
              py={2}
              color="white"
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
                <MenuItem onClick={scrollToPortScanner}>Port Scanner</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
