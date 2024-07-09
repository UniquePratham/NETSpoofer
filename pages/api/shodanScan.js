// pages/api/shodanScan.js
import { Client } from "shodan-client";

export default async function handler(req, res) {
  const { target } = req.query;

  if (!target) {
    return res.status(400).json({ error: "Target is required" });
  }

  const apiKey = process.env.SHODAN_API_KEY;
  const client = new Client(apiKey);

  try {
    const data = await client.host(target);
    res.status(200).json({ result: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
