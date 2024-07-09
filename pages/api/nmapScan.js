// pages/api/nmapScan.js
import { nmap } from "nmap";

export default async function handler(req, res) {
  const { target } = req.query;

  if (!target) {
    return res.status(400).json({ error: "Target is required" });
  }

  const scanner = new nmap.NmapScan(target, "-sP");

  scanner.on("complete", (data) => {
    res.status(200).json(data);
  });

  scanner.on("error", (error) => {
    res.status(500).json({ error: error.message });
  });

  scanner.startScan();
}
