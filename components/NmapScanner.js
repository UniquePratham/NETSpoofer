// components/NmapScanner.js
import { useState } from "react";
import { Box, Button, Input, Textarea, Text } from "@chakra-ui/react";

const NmapScanner = () => {
  const [target, setTarget] = useState("");
  const [scanResult, setScanResult] = useState(null);
  const [error, setError] = useState(null);

  const handleScan = async () => {
    setError(null);
    setScanResult(null);

    try {
      const res = await fetch(`/api/nmapScan?target=${target}`);
      const data = await res.json();

      if (res.ok) {
        setScanResult(data.result);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>
        Nmap Scanner
      </Text>
      <Input
        type="text"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        placeholder="Enter target (e.g., 192.168.1.1)"
        mb={4}
      />
      <Button onClick={handleScan} colorScheme="teal">
        Scan
      </Button>
      {error && (
        <Text color="red.500" mt={4}>
          {error}
        </Text>
      )}
      {scanResult && <Textarea mt={4} value={scanResult} readOnly rows={10} />}
    </Box>
  );
};

export default NmapScanner;
