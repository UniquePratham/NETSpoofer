// pages/nmap.js
import { ChakraProvider } from "@chakra-ui/react";
import NmapScanner from "../components/NmapScanner";
import { Box } from "@chakra-ui/react";

const NmapPage = () => {
  return (
    <Box p={4}>
      <NmapScanner />
    </Box>
  );
};

export default NmapPage;
