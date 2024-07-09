// components/NmapScanner.js
import { useState } from "react";

const NmapScanner = () => {
  const [target, setTarget] = useState("");
  const [scanResult, setScanResult] = useState(null);
  const [error, setError] = useState(null);

  const handleScan = async () => {
    try {
      const res = await fetch(`/api/nmapScan?target=${target}`);
      const data = await res.json();

      if (res.ok) {
        setScanResult(data);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Nmap Scanner</h1>
      <input
        type="text"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        placeholder="Enter target (e.g., 192.168.1.1)"
      />
      <button onClick={handleScan}>Scan</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {scanResult && (
        <div>
          <h2>Scan Result:</h2>
          <pre>{JSON.stringify(scanResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default NmapScanner;
